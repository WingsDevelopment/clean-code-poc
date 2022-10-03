import { useMutation } from 'react-query';
import { SnackbarNotificationService } from 'src/backoffice-app-code/externalServices/adapters/NotificationServiceAdapter';
import { useDefaultRQConfig } from 'src/backoffice-app-code/libs/reactQuery/hooks/reactQueryBase';
import { FETCH_LOGIN } from 'src/backoffice-app-code/libs/reactQuery/reactQueryCashKeys';
import { getServerErrorMessage } from 'src/backoffice-app-code/utils/errorUtils';
import { UserDTO, userExtension } from '../../infrastracture/DTOs/UserDTO';
import { AuthRepository } from '../../infrastracture/repositories/AuthRepository';
import { User } from '../../models/User';
import { clearStoredUser, setStoredUser } from '../localStorages/userLocalStorage';
import { useUser } from './useUser';

export interface IUseAuth {
  register: (params: { email: string; password: string }) => Promise<User | undefined>;
  registerIsLoading: boolean;
  registerErrorMessage: string | undefined;
  login: (params: { email: string; password: string }) => Promise<User | undefined>;
  loginIsLoading: boolean;
  loginErrorMessage: string | undefined;
  logout: () => void;
}

export function useAuth(): IUseAuth {
  const { clearUser, updateUser } = useUser();
  const config = useDefaultRQConfig('useAuth');
  const { EnqueueMessage } = SnackbarNotificationService();

  const {
    mutateAsync: login,
    error: loginError,
    isLoading: loginIsLoading,
  } = useMutation(
    [FETCH_LOGIN],
    async (params: { email: string; password: string }) => {
      const result = await AuthRepository.Login(params.email, params.password);
      return result ? userExtension(result) : undefined;
    },
    {
      ...config,
      onSuccess: (data: undefined | UserDTO) => {
        const user = data ? userExtension(data) : undefined;
        if (!user) {
          clearStoredUser();
        } else {
          updateUser(user);
          setStoredUser(user);
        }
      },
    }
  );

  const {
    mutateAsync: register,
    error: registerError,
    isLoading: registerIsLoading,
  } = useMutation(
    [FETCH_LOGIN],
    async (params: { email: string; password: string }) => {
      const result = await AuthRepository.Register(params.email, params.password);
      return result ? userExtension(result) : undefined;
    },
    {
      ...config,
      onSuccess: (user: undefined | User) => {
        if (!user) {
          clearStoredUser();
        } else {
          updateUser(user);
          setStoredUser(user);
        }
      },
    }
  );

  const logout = () => {
    clearUser();
    EnqueueMessage('Izlogovali ste se!', 'success');
  };

  return {
    register,
    registerIsLoading,
    registerErrorMessage: registerError ? getServerErrorMessage(registerError) : undefined,
    login,
    loginIsLoading,
    loginErrorMessage: loginError ? getServerErrorMessage(loginError) : undefined,
    logout,
  };
}

import { useQuery, useQueryClient } from 'react-query';
import { FETCH_USER } from 'src/backoffice-app-code/libs/reactQuery/configs/reactQueryCashKeys';
import { staticDataDefaultRQConfig } from 'src/backoffice-app-code/libs/reactQuery/configs/reactQueryConfigs';
import { useDefaultRQConfig } from 'src/backoffice-app-code/libs/reactQuery/hooks/reactQueryBase';
import { getServerErrorMessage } from 'src/backoffice-app-code/utils/errorUtils';
import { UserDTO, userExtension } from '../../infrastracture/DTOs/UserDTO';

import { AuthRepository } from '../../infrastracture/repositories/AuthRepository';
import { User } from '../../models/User';
import { clearStoredUser, getStoredUser, setStoredUser } from '../localStorages/userLocalStorage';

interface IUseUser {
  user: User | undefined;
  updateUser: (user: User) => void;
  clearUser: () => void;
  isLoading: boolean;
  errorMessage: string | undefined;
}

export const useUser = (): IUseUser => {
  const config = useDefaultRQConfig('useUser');
  const queryClient = useQueryClient();

  const {
    data: user,
    error,
    isLoading,
  } = useQuery([FETCH_USER], () => AuthRepository.GetUser(), {
    initialData: getStoredUser(),
    ...config,
    ...staticDataDefaultRQConfig,
    onSuccess: (data: undefined | UserDTO) => {
      const user = data ? userExtension(data) : undefined;
      if (!user) {
        clearStoredUser();
      } else {
        setStoredUser(user);
      }
    },
  });

  function updateUser(newUser: User): void {
    queryClient.setQueryData([FETCH_USER], newUser);
    setStoredUser(newUser);
  }

  function clearUser() {
    queryClient.setQueryData([FETCH_USER], null);
    queryClient.removeQueries([FETCH_USER]);
    clearStoredUser();
  }

  return {
    user,
    isLoading,
    errorMessage: error ? getServerErrorMessage(error) : undefined,
    updateUser,
    clearUser,
  };
};

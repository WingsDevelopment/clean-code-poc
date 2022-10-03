import { getServerErrorMessage } from 'src/backoffice-app-code/utils/errorUtils';
import { defaultRQConfig } from '../configs/reactQueryConfigs';
import { LoggingServiceAdapter } from '../../logging/LoggingServiceAdapter';
import { SnackbarNotificationService } from '../../../externalServices/adapters/NotificationServiceAdapter';

export const useDefaultRQConfig = (callerName: string) => {
  const { LogError } = LoggingServiceAdapter;
  const { EnqueueMessage } = SnackbarNotificationService();

  return {
    ...defaultRQConfig,
    onError: (error: unknown) => {
      EnqueueMessage(getServerErrorMessage(error), 'error');
      LogError(error, 'Error while calling api', callerName);
    },
  };
};

import { getServerErrorMessage } from 'src/backoffice-app-code/utils/errorUtils';
import { defaultRQConfig } from '../configs/reactQueryConfigs';
import { LoggingServiceAdapter } from '../../../externalServices/adapters/LoggingServiceAdapter';
import { NotificationAdapter } from '../../../externalServices/adapters/NotificationServiceAdapter';

export const useDefaultRQConfig = (callerName: string) => {
  const { LogError } = LoggingServiceAdapter;
  const { EnqueueMessage } = NotificationAdapter();

  return {
    ...defaultRQConfig,
    onError: (error: unknown) => {
      EnqueueMessage(getServerErrorMessage(error), 'error');
      LogError(error, 'Error while calling api', callerName);
    },
  };
};

import { useEnqueueSnackbar } from '../implementations/SnackBarService';
import { INotificationService } from '../interfaces/INotificationService';

export const SnackbarNotificationService = (): INotificationService => ({
  EnqueueMessage: useEnqueueSnackbar(),
});

export const WindowAlertNotificationService = (): INotificationService => ({
  EnqueueMessage: (message, messageType) => window.alert(message),
});

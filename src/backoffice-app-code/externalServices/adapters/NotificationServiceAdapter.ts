import { useEnqueueSnackbar } from '../implementations/SnackBarService';
import { INotificationAdapter } from '../interfaces/INotificationService';

export const NotificationAdapter = (): INotificationAdapter => ({
  EnqueueMessage: useEnqueueSnackbar(),
  // EnqueueMessage: (message, messageType) => window.alert(message),
});

export type MessageType = 'default' | 'error' | 'success' | 'warning' | 'info';

export interface INotificationService {
  EnqueueMessage: (message: string, messageType: MessageType) => void;
}

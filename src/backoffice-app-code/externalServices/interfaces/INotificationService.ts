export type MessageType = 'default' | 'error' | 'success' | 'warning' | 'info';

export interface INotificationAdapter {
  EnqueueMessage: (message: string, messageType: MessageType) => void;
}

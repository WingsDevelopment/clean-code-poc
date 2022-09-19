import { useSnackbar } from 'notistack';
import { MessageType } from '../interfaces/INotificationService';

export const useEnqueueSnackbar = () => {
  const { enqueueSnackbar } = useSnackbar();

  return (message: string, variant: MessageType = 'error') => {
    enqueueSnackbar(message, { variant, autoHideDuration: 6000 });
  };
};

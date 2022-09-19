import { useMutation, useQueryClient } from 'react-query';
import { NotificationAdapter } from 'src/backoffice-app-code/externalServices/adapters/NotificationServiceAdapter';
import { FETCH_ALL_TAGS } from 'src/backoffice-app-code/libs/reactQuery/configs/reactQueryCashKeys';
import { useDefaultRQConfig } from 'src/backoffice-app-code/libs/reactQuery/hooks/reactQueryBase';
import { getServerErrorMessage } from 'src/backoffice-app-code/utils/errorUtils';
import { TagsRepository } from "../../infrastracture/Repositories/TagsRepository";

export const useDeleteTag = () => {
  const { EnqueueMessage } = NotificationAdapter();
  const queryClient = useQueryClient();
  const config = useDefaultRQConfig('useDeleteTag');

  const { isLoading, error, mutateAsync } = useMutation(
      async (tagId: string) => {
        const response = await TagsRepository.DeleteTagAsync(tagId);
        return response;
      },
      {
        ...config,
        onSuccess: () => {
          queryClient.invalidateQueries([FETCH_ALL_TAGS]);
          EnqueueMessage('Tag je uspešno obrisan', 'success');
        },
      }
  );

  return {
    deleteTagAsync: mutateAsync,
    errorMessage: error ? getServerErrorMessage(error) : undefined,
    isLoading,
  };
};
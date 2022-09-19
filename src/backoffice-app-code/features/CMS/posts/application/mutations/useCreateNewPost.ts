import { useMutation, useQueryClient } from 'react-query';
import { NotificationAdapter } from 'src/backoffice-app-code/externalServices/adapters/NotificationServiceAdapter';
import { FETCH_ALL_POSTS } from 'src/backoffice-app-code/libs/reactQuery/configs/reactQueryCashKeys';
import { useDefaultRQConfig } from 'src/backoffice-app-code/libs/reactQuery/hooks/reactQueryBase';
import { getServerErrorMessage } from 'src/backoffice-app-code/utils/errorUtils';
import { newPostDtoExtension } from '../../infrastructure/DTOs/NewPostDTO';
import { PostsRepository } from '../../infrastructure/Repositories/PostsRepository';
import { FormPost } from '../../models/FormPost';

export const useCreateNewPost = () => {
  const { EnqueueMessage } = NotificationAdapter();
  const queryClient = useQueryClient();
  const config = useDefaultRQConfig('useCreateNewPost');

  const { isLoading, error, mutateAsync } = useMutation(
    async (post: FormPost) => {
      console.log(post);
      const response = await PostsRepository.CreatePostAsync(newPostDtoExtension(post));
      return response;
    },
    {
      ...config,
      onSuccess: () => {
        queryClient.invalidateQueries([FETCH_ALL_POSTS]);
        EnqueueMessage('Objava je uspešno kreirana', 'success');
      },
    }
  );

  return {
    createNewPostAsync: mutateAsync,
    errorMessage: error ? getServerErrorMessage(error) : undefined,
    isLoading,
  };
};

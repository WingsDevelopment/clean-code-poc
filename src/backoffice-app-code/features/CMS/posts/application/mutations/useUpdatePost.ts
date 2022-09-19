import { useMutation, useQueryClient } from 'react-query';
import { NotificationAdapter } from 'src/backoffice-app-code/externalServices/adapters/NotificationServiceAdapter';
import { FETCH_ALL_POSTS } from 'src/backoffice-app-code/libs/reactQuery/configs/reactQueryCashKeys';
import { useDefaultRQConfig } from 'src/backoffice-app-code/libs/reactQuery/hooks/reactQueryBase';
import { getServerErrorMessage } from 'src/backoffice-app-code/utils/errorUtils';
import { updatePostDtoExtension } from '../../infrastructure/DTOs/UpdatePostDTO';
import { PostsRepository } from '../../infrastructure/Repositories/PostsRepository';
import { FormPost } from '../../models/FormPost';

export const useUpdatePost = () => {
    const { EnqueueMessage } = NotificationAdapter();
    const queryClient = useQueryClient();
    const config = useDefaultRQConfig('useUpdatePost');

    const { isLoading, error, mutateAsync } = useMutation(
        async (post: FormPost) => {
            const response = await PostsRepository.UpdatePostAsync(updatePostDtoExtension(post));
            return response;
        },
        {
            ...config,
            onSuccess: () => {
                queryClient.invalidateQueries([FETCH_ALL_POSTS]);
                EnqueueMessage('Objava je uspešno ažurirana', 'success');
            },
        }
    );

    return {
        updatePostAsync: mutateAsync,
        errorMessage: error ? getServerErrorMessage(error) : undefined,
        isLoading,
    };
};

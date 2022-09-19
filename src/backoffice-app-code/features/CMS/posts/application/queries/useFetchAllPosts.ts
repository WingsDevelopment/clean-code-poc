import { useQuery } from 'react-query';
import { FETCH_ALL_POSTS } from 'src/backoffice-app-code/libs/reactQuery/configs/reactQueryCashKeys';
import { useDefaultRQConfig } from 'src/backoffice-app-code/libs/reactQuery/hooks/reactQueryBase';
import { getServerErrorMessage } from 'src/backoffice-app-code/utils/errorUtils';
import { PostDTO, postExtension } from '../../infrastructure/DTOs/PostDTO';
import { PostsRepository } from '../../infrastructure/Repositories/PostsRepository';

export const useFetchAllPosts = () => {
    const config = useDefaultRQConfig('useFetchAllPosts');

    const { isLoading, error, data } = useQuery(
        [FETCH_ALL_POSTS],
        () => PostsRepository.GetAllPostsAsync(),
        {
            ...config,
            select: (data: PostDTO[]) => data.map(postExtension),
        }
    );

    return {
        data,
        isLoading,
        errorMessage: error ? getServerErrorMessage(error) : undefined,
    };
};

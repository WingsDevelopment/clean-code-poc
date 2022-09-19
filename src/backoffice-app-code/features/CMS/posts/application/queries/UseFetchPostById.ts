import { useQuery } from 'react-query';
import { FETCH_POST_BY_ID } from 'src/backoffice-app-code/libs/reactQuery/configs/reactQueryCashKeys';
import { useDefaultRQConfig } from 'src/backoffice-app-code/libs/reactQuery/hooks/reactQueryBase';
import { getServerErrorMessage } from 'src/backoffice-app-code/utils/errorUtils';
import { PostDTO, postExtension } from '../../infrastructure/DTOs/PostDTO';
import { PostsRepository } from '../../infrastructure/Repositories/PostsRepository';

export const useFetchPostById = (id: string | undefined) => {
  const config = useDefaultRQConfig('useFetchPostById');

  const { isLoading, error, data } = useQuery(
    [FETCH_POST_BY_ID, id],
    () => PostsRepository.GetPostByIdAsync(id!),
    {
      ...config,
      enabled: !!id,
      select: (data: PostDTO | undefined) => (data ? postExtension(data) : undefined),
    }
  );

  return {
    post: data,
    isLoading,
    errorMessage: error ? getServerErrorMessage(error) : undefined,
  };
};

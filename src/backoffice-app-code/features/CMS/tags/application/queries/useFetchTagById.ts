import { useQuery } from 'react-query';
import { FETCH_TAG_BY_ID } from 'src/backoffice-app-code/libs/reactQuery/configs/reactQueryCashKeys';
import { useDefaultRQConfig } from 'src/backoffice-app-code/libs/reactQuery/hooks/reactQueryBase';
import { getServerErrorMessage } from 'src/backoffice-app-code/utils/errorUtils';
import { TagDTO, tagExtension } from '../../infrastracture/DTOs/TagDTO';
import { TagsRepository } from '../../infrastracture/Repositories/TagsRepository';

export const useFetchTagById = (id: string | undefined) => {
  const config = useDefaultRQConfig('useFetchTagById');

  const { isLoading, error, data } = useQuery(
    [FETCH_TAG_BY_ID, id],
    () => TagsRepository.GetTagByIdAsync(id!),
    {
      ...config,
      enabled: !!id,
      select: (data: TagDTO | undefined) => (data ? tagExtension(data) : undefined),
    }
  );

  return {
    tag: data,
    isLoading,
    errorMessage: error ? getServerErrorMessage(error) : undefined,
  };
};

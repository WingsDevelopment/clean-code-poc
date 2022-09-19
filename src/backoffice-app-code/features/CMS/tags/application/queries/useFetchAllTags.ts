import { useQuery } from 'react-query';
import { FETCH_ALL_TAGS } from 'src/backoffice-app-code/libs/reactQuery/configs/reactQueryCashKeys';
import { useDefaultRQConfig } from 'src/backoffice-app-code/libs/reactQuery/hooks/reactQueryBase';
import { getServerErrorMessage } from 'src/backoffice-app-code/utils/errorUtils';
import { TagDTO, tagExtension } from '../../infrastracture/DTOs/TagDTO';
import { TagsRepository } from '../../infrastracture/Repositories/TagsRepository';

export const useFetchAllTags = () => {
  const config = useDefaultRQConfig('useFetchAllTags');

  const { isLoading, error, data } = useQuery(
    [FETCH_ALL_TAGS],
    () => TagsRepository.GetAllTagsAsync(),
    {
      ...config,
      select: (data: TagDTO[]) => data.map(tagExtension),
    }
  );

  return {
    data,
    isLoading,
    errorMessage: error ? getServerErrorMessage(error) : undefined,
  };
};

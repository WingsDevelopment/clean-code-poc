// // import { useMutation, useQueryClient } from 'react-query';
// // import { templateExtension } from '../../../infrastracture/DTOs/TemplateDTO';
// // import { TemplateRepositoryAdapter } from '../../../infrastracture/adapters/TemplateRepositoryAdapter';
// // import { Template } from '../../../models/Template';
// // import { NotificationAdapter } from 'src/back-office-app-code/subDomains/common/infrastracture/notifications/NotificationAdapter';
// // import {
// //   FETCH_ALL_TEMPLATES,
// //   useOrderingApiDefaultConfig,
// // } from 'src/back-office-app-code/subDomains/common/infrastracture/reactQuery/OrderingApiConfig';
// // import { getServerErrorMessage } from 'src/back-office-app-code/subDomains/common/utils/utils';

import { useMutation, useQueryClient } from 'react-query';
import { SnackbarNotificationService } from 'src/backoffice-app-code/externalServices/adapters/NotificationServiceAdapter';
import { FETCH_ALL_TAGS } from 'src/backoffice-app-code/libs/reactQuery/configs/reactQueryCashKeys';
import { useDefaultRQConfig } from 'src/backoffice-app-code/libs/reactQuery/hooks/reactQueryBase';
import { getServerErrorMessage } from 'src/backoffice-app-code/utils/errorUtils';
import { updateTagDtoExtension } from '../../infrastracture/DTOs/UpdateTagDTO';
import { TagsRepository } from '../../infrastracture/Repositories/TagsRepository';
import { FormTag } from '../../models/FormTag';

export const useUpdateTag = () => {
  const { EnqueueMessage } = SnackbarNotificationService();
  const queryClient = useQueryClient();
  const config = useDefaultRQConfig('useUpdateTag');

  const { isLoading, error, mutateAsync } = useMutation(
    async (tag: FormTag) => {
      const response = await TagsRepository.UpdateTagAsync(updateTagDtoExtension(tag));
      return response;
    },
    {
      ...config,
      onSuccess: () => {
        queryClient.invalidateQueries([FETCH_ALL_TAGS]);
        EnqueueMessage('Tag je uspešno ažuriran', 'success');
      },
    }
  );

  return {
    updateTagAsync: mutateAsync,
    errorMessage: error ? getServerErrorMessage(error) : undefined,
    isLoading,
  };
};

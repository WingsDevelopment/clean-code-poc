import React, { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router';
import DefaultSingleColumnDetailsCard from 'src/backoffice-app-code/components/cards/DefaultSingleColumnDetailsCard';
import DefaultPageWithBreadcrumbs from 'src/backoffice-app-code/components/page/DefaultPageWithBreadcrumbs';
import { TagRoutes } from 'src/backoffice-app-code/routes/Routes';
import { useUpdateTag } from '../application/mutations/useUpdateTag';
import { useFetchTagById } from '../application/queries/useFetchTagById';
import { createEmptyUpdateTag, createUpdateTag, FormTag } from '../models/FormTag';
import { TagForm } from './TagForm';

type Params = {
  id: string;
};

const CreateTagPage: React.FC = () => {
  //component functions
  const { id } = useParams<Params>();
  const navigate = useNavigate();

  //data fatching functions
  const { updateTagAsync, isLoading: isSubmitting } = useUpdateTag();
  const { tag, errorMessage, isLoading: isLoadingTag } = useFetchTagById(id);

  //funcion implementations
  const handleSubmit = async (tag: FormTag) => {
    const id = await updateTagAsync(tag);
    navigate(TagRoutes.details + '/' + id);
  };

  const initialData = useMemo(() => (tag ? createUpdateTag(tag) : createEmptyUpdateTag()), [tag]);

  return (
    <DefaultPageWithBreadcrumbs
      title="Izmeni tag"
      links={[
        {
          name: 'Tabela tagova',
          href: TagRoutes.index,
        },
        {
          name: 'Izmeni tag',
        },
      ]}
    >
      {!errorMessage && (
        <TagForm isLoading={isSubmitting} submitHandler={handleSubmit} initialData={initialData} />
      )}

      {errorMessage && (
        <DefaultSingleColumnDetailsCard errorMessage={errorMessage} isLoading={isLoadingTag} />
      )}
    </DefaultPageWithBreadcrumbs>
  );
};

export default CreateTagPage;

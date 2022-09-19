import React, { useMemo } from 'react';
import { useNavigate } from 'react-router';
import DefaultPageWithBreadcrumbs from 'src/backoffice-app-code/components/page/DefaultPageWithBreadcrumbs';
import { TagRoutes } from 'src/backoffice-app-code/routes/Routes';
import { useCreateNewTag } from '../application/mutations/useCreateNewTag';
import { createEmptyNewTag, FormTag } from '../models/FormTag';
import { TagForm } from './TagForm';

const CreateTagPage: React.FC = () => {
  //component functions
  const navigate = useNavigate();

  //data fatching functions
  const { createNewTagAsync, isLoading } = useCreateNewTag();

  //funcion implementations
  const handleSubmit = async (tag: FormTag) => {
    const id = await createNewTagAsync(tag);
    navigate(TagRoutes.details + '/' + id);
  };
  //use memo to prevent rerendering of the form
  const initialData = useMemo(() => createEmptyNewTag(), []);

  return (
    <DefaultPageWithBreadcrumbs
      title="Napravi tag"
      links={[
        {
          name: 'Tabela tagova',
          href: TagRoutes.index,
        },
        {
          name: 'Napravi tag',
        },
      ]}
    >
      <TagForm isLoading={isLoading} submitHandler={handleSubmit} initialData={initialData} />
    </DefaultPageWithBreadcrumbs>
  );
};

export default CreateTagPage;

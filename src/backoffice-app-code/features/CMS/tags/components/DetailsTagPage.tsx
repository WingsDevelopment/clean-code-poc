import React from 'react';
import { useParams } from 'react-router';
import RedirectButtonWithUpdateIcon from 'src/backoffice-app-code/components/buttons/RedirectButtonWithUpdateIcon';
import LoadableDetailsHandler from 'src/backoffice-app-code/components/cards/DefaultSingleColumnDetailsCard';
import DefaultReadOnlyTextField from 'src/backoffice-app-code/components/inputs/DefaultReadOnlyTextField';
import DefaultReadOnlyTextFieldMultilane from 'src/backoffice-app-code/components/inputs/DefaultReadOnlyTextFieldMultilane';
import DefaultPageWithBreadcrumbs from 'src/backoffice-app-code/components/page/DefaultPageWithBreadcrumbs';
import { TagRoutes } from 'src/backoffice-app-code/routes/Routes';
import { useFetchTagById } from '../application/queries/useFetchTagById';

type Params = {
  id: string;
};

const CreateTagPage: React.FC = () => {
  const { id } = useParams<Params>();

  const { tag, errorMessage, isLoading: isLoadingTag } = useFetchTagById(id);

  return (
    <DefaultPageWithBreadcrumbs
      title="Detalji taga"
      links={[
        {
          name: 'Tabela tagova',
          href: TagRoutes.index,
        },
        {
          name: 'Detalji taga',
        },
      ]}
      breadcrumbsAction={
        <RedirectButtonWithUpdateIcon label="Izmeni tag" route={TagRoutes.update + '/' + id} />
      }
    >
      <LoadableDetailsHandler errorMessage={errorMessage} isLoading={isLoadingTag}>
        <DefaultReadOnlyTextField label="Naziv" value={tag?.title} />
        <DefaultReadOnlyTextField
          label="orderInCarouselHomePage"
          value={tag?.orderInCarouselHomePage}
        />
        {/* todo check date format  */}
        <DefaultReadOnlyTextField label="Napravljen" value={tag?.createdAt?.toString()} />
        <DefaultReadOnlyTextField label="Ažuriran" value={tag?.updatedAt?.toString()} />
        <DefaultReadOnlyTextField label="Url slug" value={tag?.urlSlug} />
        <DefaultReadOnlyTextFieldMultilane label="Opis" value={tag?.description} />
      </LoadableDetailsHandler>
    </DefaultPageWithBreadcrumbs>
  );
};

export default CreateTagPage;

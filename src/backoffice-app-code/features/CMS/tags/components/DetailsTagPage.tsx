import React from 'react';
import { useParams } from 'react-router';
import DefaultDoubleColumnBox from 'src/backoffice-app-code/components/boxs/DefaultDoubleColumnBox';
import DefaultSingleColumnBox from 'src/backoffice-app-code/components/boxs/DefaultSingleColumnBox';
import RedirectButtonWithUpdateIcon from 'src/backoffice-app-code/components/buttons/RedirectButtonWithUpdateIcon';
import { LoadableCardWrapper } from 'src/backoffice-app-code/components/cards/LoadableCardWrapper';
import DefaultReadOnlyTextField from 'src/backoffice-app-code/components/inputs/DefaultReadOnlyTextField';
import DefaultReadOnlyTextFieldMultilane from 'src/backoffice-app-code/components/inputs/DefaultReadOnlyTextFieldMultilane';
import PageWithBreadcrumbsLayout from 'src/backoffice-app-code/components/layouts/PageWithBreadcrumbsLayout';
import { TagRoutes } from 'src/backoffice-app-code/routes/Routes';
import { useFetchTagById } from '../application/queries/useFetchTagById';

type Params = {
  id: string;
};

const CreateTagPage: React.FC = () => {
  const { id } = useParams<Params>();

  const { tag, errorMessage, isLoading: isLoadingTag } = useFetchTagById(id);

  return (
    <PageWithBreadcrumbsLayout
      title="Detalji taga"
      links={[
        {
          name: 'Tabela tagova',
          href: TagRoutes.index,
        },
      ]}
      breadcrumbsAction={
        <RedirectButtonWithUpdateIcon label="Izmeni tag" route={TagRoutes.update + '/' + id} />
      }
    >
      <LoadableCardWrapper errorMessage={errorMessage} isLoading={isLoadingTag}>
        <DefaultSingleColumnBox>
          <DefaultReadOnlyTextField label="Naziv" value={tag?.title} />
          <DefaultReadOnlyTextField
            label="orderInCarouselHomePage"
            value={tag?.orderInCarouselHomePage}
          />
          <DefaultReadOnlyTextField label="Napravljen" value={tag?.createdAt?.toString()} />
          <DefaultReadOnlyTextField label="Ažuriran" value={tag?.updatedAt?.toString()} />
          <DefaultReadOnlyTextField label="Url slug" value={tag?.urlSlug} />
        </DefaultSingleColumnBox>
        <DefaultDoubleColumnBox>
          <DefaultReadOnlyTextFieldMultilane label="Opis" value={tag?.description} />
        </DefaultDoubleColumnBox>
      </LoadableCardWrapper>
    </PageWithBreadcrumbsLayout>
  );
};

export default CreateTagPage;

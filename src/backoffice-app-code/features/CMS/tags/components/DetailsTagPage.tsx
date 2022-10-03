import React from 'react';
import { useParams } from 'react-router';
import DoubleColumnBox from 'src/backoffice-app-code/components/boxs/DoubleColumnBox';
import SingleColumnBox from 'src/backoffice-app-code/components/boxs/SingleColumnBox';
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
        <SingleColumnBox>
          <DefaultReadOnlyTextField label="Naziv" value={tag?.title} />
          <DefaultReadOnlyTextField
            label="orderInCarouselHomePage"
            value={tag?.orderInCarouselHomePage}
          />
          <DefaultReadOnlyTextField label="Napravljen" value={tag?.createdAt?.toString()} />
          <DefaultReadOnlyTextField label="Ažuriran" value={tag?.updatedAt?.toString()} />
          <DefaultReadOnlyTextField label="Url slug" value={tag?.urlSlug} />
        </SingleColumnBox>
        <DoubleColumnBox>
          <DefaultReadOnlyTextFieldMultilane label="Opis" value={tag?.description} />
        </DoubleColumnBox>
      </LoadableCardWrapper>
    </PageWithBreadcrumbsLayout>
  );
};

export default CreateTagPage;

import React from 'react';
import DefaultPageWithBreadcrumbs from 'src/backoffice-app-code/components/page/DefaultPageWithBreadcrumbs';
import { TagRoutes } from 'src/backoffice-app-code/routes/Routes';

import { useFetchAllTags } from '../application/queries/useFetchAllTags';
import RedirectButtonWithCreateIcon from 'src/backoffice-app-code/components/buttons/RedirectButtonWithCreateIcon';
import { TagTableContainer } from './TagTable/TagTableContainer';
import { IS_DEV_MODE } from 'src/backoffice-app-code/configs/appConfig';

const TagsPage: React.FC = () => {
  const { data: tags, isLoading, errorMessage } = useFetchAllTags();
  return (
    <DefaultPageWithBreadcrumbs
      title="Tagovi"
      links={[
        {
          name: 'Tabela tagova',
        },
      ]}
      breadcrumbsAction={
        <RedirectButtonWithCreateIcon label="Napravi tag" route={TagRoutes.create} />
      }
    >
      {IS_DEV_MODE && <SomeDevMessage />}
      <TagTableContainer tags={tags} isLoading={isLoading} errorMessage={errorMessage} />
    </DefaultPageWithBreadcrumbs>
  );
};

const SomeDevMessage: React.FC = () => (
  <div>
    <p>ITEMS_PER_PAGE = 2</p>
  </div>
);

export default TagsPage;

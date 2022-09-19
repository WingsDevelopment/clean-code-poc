import { useMemo } from 'react';
import { TLink } from '../headerBreadcrumbs/Breadcrumbs';
import HeaderBreadcrumbs from '../headerBreadcrumbs/HeaderBreadcrumbs';
import DefaultPage from './DefaultPage';

interface Props {
  children: React.ReactNode;
  title: string;
  links: TLink[];
  breadcrumbsAction?: React.ReactNode;
}

const DefaultPageWithBreadcrumbs: React.FC<Props> = ({
  children,
  title = '',
  links = [],
  breadcrumbsAction = undefined,
}) => {
  const linksWithHome: TLink[] = useMemo(() => [{ name: 'Home', href: '/' }, ...links], [links]);

  return (
    <DefaultPage title={title}>
      <HeaderBreadcrumbs heading={title} links={linksWithHome} action={breadcrumbsAction} />
      {children}
    </DefaultPage>
  );
};

export default DefaultPageWithBreadcrumbs;

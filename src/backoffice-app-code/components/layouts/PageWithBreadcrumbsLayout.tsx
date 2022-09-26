import { TLink } from '../headerBreadcrumbs/Breadcrumbs';
import HeaderBreadcrumbs from '../headerBreadcrumbs/HeaderBreadcrumbs';
import DefaultPage from '../page/DefaultPage';

interface Props {
  children: React.ReactNode;
  title: string;
  links: TLink[];
  breadcrumbsAction?: React.ReactNode;
}

const PageWithBreadcrumbsLayout: React.FC<Props> = ({
  children,
  title = '',
  links = [],
  breadcrumbsAction = undefined,
}) => {
  const linksWithHome: TLink[] = [{ name: 'Home', href: '/' }, ...links, { name: title }];

  return (
    <DefaultPage title={title}>
      <HeaderBreadcrumbs heading={title} links={linksWithHome} action={breadcrumbsAction} />
      {children}
    </DefaultPage>
  );
};

export default PageWithBreadcrumbsLayout;

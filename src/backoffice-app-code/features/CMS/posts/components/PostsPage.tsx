import RedirectButtonWithCreateIcon from 'src/backoffice-app-code/components/buttons/RedirectButtonWithCreateIcon';
import PageWithBreadcrumbsLayout from 'src/backoffice-app-code/components/layouts/PageWithBreadcrumbsLayout';
import { PostsRoutes } from 'src/backoffice-app-code/routes/Routes';
import { useFetchAllPosts } from '../application/queries/useFetchAllPosts';

const PostsPage: React.FC = () => {
  const { data: posts } = useFetchAllPosts();

  console.log(posts);
  return (
    <PageWithBreadcrumbsLayout
      title="Objave"
      links={[
        {
          name: 'Tabela objava',
        },
      ]}
      breadcrumbsAction={
        <RedirectButtonWithCreateIcon label="Napravi objavu" route={PostsRoutes.create} />
      }
    >
      <div>posts</div>
    </PageWithBreadcrumbsLayout>
  );
};

export default PostsPage;

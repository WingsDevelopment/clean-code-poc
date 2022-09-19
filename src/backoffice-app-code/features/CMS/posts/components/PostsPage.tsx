import RedirectButtonWithCreateIcon from 'src/backoffice-app-code/components/buttons/RedirectButtonWithCreateIcon';
import DefaultPageWithBreadcrumbs from 'src/backoffice-app-code/components/page/DefaultPageWithBreadcrumbs';
import { PostsRoutes } from 'src/backoffice-app-code/routes/Routes';
import { useFetchAllPosts } from '../application/queries/useFetchAllPosts';

const PostsPage: React.FC = () => {
  const { data: posts } = useFetchAllPosts();

  console.log(posts);
  return (
    <DefaultPageWithBreadcrumbs
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
    </DefaultPageWithBreadcrumbs>
  );
};

export default PostsPage;

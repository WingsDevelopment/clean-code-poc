import { useMemo } from 'react';
import { useNavigate } from 'react-router';
import PageWithBreadcrumbsLayout from 'src/backoffice-app-code/components/layouts/PageWithBreadcrumbsLayout';
import { PostsRoutes } from 'src/backoffice-app-code/routes/Routes';
import { useFetchAllTags } from '../../tags/application/queries/useFetchAllTags';
import { useCreateNewPost } from '../application/mutations/useCreateNewPost';
import { createEmptyNewPost } from '../models/FormPost';
import { PostForm } from './PostForm';

const CreatePostPage: React.FC = () => {
  //component functions
  const navigate = useNavigate();

  //data fatching functions
  const { createNewPostAsync, isLoading } = useCreateNewPost();

  const { data: tags } = useFetchAllTags();

  //funcion implementations
  const handleSubmit = async (post: any) => {
    const id = await createNewPostAsync(post);
    navigate(PostsRoutes.details + '/' + id);
    console.log(post);
  };
  //use memo to prevent rerendering of the form
  const initialData = useMemo(() => createEmptyNewPost(), []);

  return (
    <PageWithBreadcrumbsLayout
      title="Napravi objavu"
      links={[
        {
          name: 'Tabela objava',
          href: PostsRoutes.index,
        },
        {
          name: 'Napravi objavu',
        },
      ]}
    >
      <PostForm
        allTags={tags}
        isLoading={isLoading}
        submitHandler={handleSubmit}
        initialData={initialData}
      />
    </PageWithBreadcrumbsLayout>
  );
};

export default CreatePostPage;

import { Suspense, lazy, ElementType } from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';
// layouts
import DashboardLayout from '../../layouts/dashboard';
import LogoOnlyLayout from '../../layouts/LogoOnlyLayout';
// components
import LoadingScreen from '../../components/LoadingScreen';
import { TagRoutes, PostsRoutes } from './Routes';

// ----------------------------------------------------------------------

const Loadable = (Component: ElementType) => (props: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();

  return (
    <Suspense fallback={<LoadingScreen isDashboard={pathname.includes('/dashboard')} />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Navigate to="/dashboard/one" replace />,
    },
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/one" replace />, index: true },
        { path: 'one', element: <PageOne /> },
        { path: 'two', element: <PageTwo /> },
        { path: 'three', element: <PageThree /> },
        {
          path: 'user',
          children: [
            { element: <Navigate to="/dashboard/user/four" replace />, index: true },
            { path: 'four', element: <PageFour /> },
            { path: 'five', element: <PageFive /> },
            { path: 'six', element: <PageSix /> },
          ],
        },
        {
          path: PostsRoutes.root,
          children: [
            { element: <Navigate to={PostsRoutes.root} replace />, index: true },
            { path: PostsRoutes.index, element: <PostsPage /> },
            { path: PostsRoutes.create, element: <CreatePostPage /> },
          ],
        },

        {
          path: TagRoutes.root,
          children: [
            { element: <Navigate to={TagRoutes.root} replace />, index: true },
            { path: TagRoutes.index, element: <TagsPage /> },
            { path: TagRoutes.create, element: <CreateTagPage /> },
            { path: TagRoutes.details + '/:id', element: <DetailsTagPage /> },
            { path: TagRoutes.update + '/:id', element: <UpdateTagPage /> },
          ],
        },
      ],
    },
    {
      path: '*',
      element: <LogoOnlyLayout />,
      children: [
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" replace /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}

// Dashboard
const PageOne = Loadable(lazy(() => import('../../theme-code/pages/PageOne')));
const PageTwo = Loadable(lazy(() => import('../../theme-code/pages/PageTwo')));
const PageThree = Loadable(lazy(() => import('../../theme-code/pages/PageThree')));
const PageFour = Loadable(lazy(() => import('../../theme-code/pages/PageFour')));
const PageFive = Loadable(lazy(() => import('../../theme-code/pages/PageFive')));
const PageSix = Loadable(lazy(() => import('../../theme-code/pages/PageSix')));
const NotFound = Loadable(lazy(() => import('../../theme-code/pages/Page404')));
//posts
const PostsPage = Loadable(lazy(() => import('../features/CMS/posts/components/PostsPage')));
const CreatePostPage = Loadable(
  lazy(() => import('../features/CMS/posts/components/CreatePostPage'))
);
//tags
const TagsPage = Loadable(lazy(() => import('../features/CMS/tags/components/TagsPage')));
const CreateTagPage = Loadable(lazy(() => import('../features/CMS/tags/components/CreateTagPage')));
const UpdateTagPage = Loadable(lazy(() => import('../features/CMS/tags/components/UpdateTagPage')));
const DetailsTagPage = Loadable(
  lazy(() => import('../features/CMS/tags/components/DetailsTagPage'))
);

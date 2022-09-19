// components
import Iconify from 'src/components/Iconify';
import SvgIconStyle from '../../components/SvgIconStyle';
import { TagRoutes, PostsRoutes } from './Routes';

// ----------------------------------------------------------------------

//todo izbaciti getIcon
const getIcon = (name: string) => (
  <SvgIconStyle src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

//todo ICONS
const ICONS = {
  user: getIcon('ic_user'),
  ecommerce: getIcon('ic_ecommerce'),
  analytics: getIcon('ic_analytics'),
  dashboard: getIcon('ic_dashboard'),
};

const navConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  //todo izbaciti ->
  {
    subheader: 'general v3.4.0',
    items: [{ title: 'Component examples', path: '/dashboard/one', icon: ICONS.dashboard }],
  },
  {
    subheader: 'CMS',
    items: [
      {
        title: 'Tagovi',
        path: TagRoutes.index,
        icon: <Iconify icon={'ant-design:tags-outlined'} />,
      },
      {
        title: 'Objave',
        path: PostsRoutes.index,
        icon: <Iconify icon={'bi:file-post'} />,
      },
    ],
  },

  // MANAGEMENT
  // ----------------------------------------------------------------------
  //todo izbaciti ->
  {
    subheader: 'management',
    items: [
      {
        title: 'user',
        path: '/dashboard/user',
        icon: ICONS.user,
        children: [
          { title: 'Four', path: '/dashboard/user/four' },
          { title: 'Five', path: '/dashboard/user/five' },
          { title: 'Six', path: '/dashboard/user/six' },
        ],
      },
    ],
  },
];

export default navConfig;

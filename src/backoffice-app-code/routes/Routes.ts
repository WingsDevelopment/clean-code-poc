export const RootRoute = '/dashboard';

//------------------ CMS Routes ------------------
const CMSRoot = `${RootRoute}/cms`;
const TagRoot = `${CMSRoot}/tags`;
export const TagRoutes = {
  root: TagRoot,
  index: `${TagRoot}/index`,
  details: `${TagRoot}/details`,
  create: `${TagRoot}/create`,
  update: `${TagRoot}/update`,
};
const PostsRoot = `${CMSRoot}/posts`;
export const PostsRoutes = {
  root: PostsRoot,
  index: `${PostsRoot}/index`,
  details: `${PostsRoot}/details`,
  create: `${PostsRoot}/create`,
  update: `${PostsRoot}/update`,
};
//------------------ Some other Routes ------------------

import uuidv4 from 'src/backoffice-app-code/utils/uuidGenerator';
import { NewPostDTO } from '../DTOs/NewPostDTO';
import { PostDTO } from '../DTOs/PostDTO';
import { UpdatePostDTO } from '../DTOs/UpdatePostDTO';

const mockData: PostDTO[] = [
  {
    id: '1',
    title: 'Post 1',
    content: 'Post 1 content',
    metaTitle: 'Post 1 meta title',
    tags: [],
    createdAt: new Date(),
    isVisible: true,
    mainFaqPost: false,
    metaDescription: 'Post 1 meta description',
    showInCarouselHomePage: false,
    showInFaqList: false,
    showInListHomePage: false,
    showInNewsList: false,
    showInNewsSlider: false,
  },
];

const GetAllPostsAsync = async (): Promise<PostDTO[]> => mockData;

//return data from mock
const GetPostByIdAsync = async (id: string): Promise<PostDTO | undefined> => {
  const post = mockData.find((x) => x.id === id);
  return post;
};

const CreatePostAsync = async (post: NewPostDTO): Promise<string> => {
  const newPost = {
    ...post,
    id: uuidv4(),
    createdAt: new Date(),
    tags: [],
  };
  mockData.push(newPost);
  return newPost.id;
};

const UpdatePostAsync = async (post: UpdatePostDTO): Promise<string> => {
  const index = mockData.findIndex((x) => x.id === post.id);
  mockData[index] = {
    ...mockData[index],
    ...post,
    tags: [],
  };
  return post.id;
};

const DeletePostAsync = async (id: string): Promise<string> => {
  const index = mockData.findIndex((x) => x.id === id);
  mockData.splice(index, 1);
  return id;
};

export const PostsRepository = {
  GetAllPostsAsync,
  GetPostByIdAsync,
  CreatePostAsync,
  UpdatePostAsync,
  DeletePostAsync,
};

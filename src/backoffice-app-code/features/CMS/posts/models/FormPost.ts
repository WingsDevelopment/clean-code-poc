import { Post } from './Post';

export interface FormPost {
  id?: string;
  title: string;
  styledTitle?: string;
  description?: string;
  urlSlug?: string;
  content: string;
  imagePath?: string;
  metaTitle: string;
  metaDescription: string;
  isVisible: boolean;
  showInCarouselHomePage: boolean;
  showInListHomePage: boolean;
  showInFaqList: boolean;
  mainFaqPost: boolean;
  showInNewsList: boolean;
  showInNewsSlider: boolean;
  orderInCarouselHomePage?: number;
  tags: string[];
}

export const createEmptyNewPost = (): FormPost => ({
  title: '',
  content: '',
  metaTitle: '',
  metaDescription: '',
  isVisible: true,
  showInCarouselHomePage: false,
  showInListHomePage: false,
  showInFaqList: false,
  mainFaqPost: false,
  showInNewsList: false,
  showInNewsSlider: false,
  tags: [],
});

export const createEmptyUpdatePost = (): FormPost => ({
  id: '',
  title: '',
  content: '',
  metaTitle: '',
  metaDescription: '',
  isVisible: true,
  showInCarouselHomePage: false,
  showInListHomePage: false,
  showInFaqList: false,
  mainFaqPost: false,
  showInNewsList: false,
  showInNewsSlider: false,
  tags: [],
});

export const createUpdatePost = (post: Post): FormPost => ({
  id: post.id,
  title: post.title,
  styledTitle: post.styledTitle,
  description: post.description,
  orderInCarouselHomePage: post.orderInCarouselHomePage,
  urlSlug: post.urlSlug,
  content: post.content,
  imagePath: post.imagePath,
  metaTitle: post.metaTitle,
  metaDescription: post.metaDescription,
  isVisible: post.isVisible,
  showInCarouselHomePage: post.showInCarouselHomePage,
  showInListHomePage: post.showInListHomePage,
  showInFaqList: post.showInFaqList,
  mainFaqPost: post.mainFaqPost,
  showInNewsList: post.showInNewsList,
  showInNewsSlider: post.showInNewsSlider,
  tags: post.tags.map((tag) => tag.id),
});

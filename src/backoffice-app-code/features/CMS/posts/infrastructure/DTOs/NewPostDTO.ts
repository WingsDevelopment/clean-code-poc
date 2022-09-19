import { FormPost } from '../../models/FormPost';

export interface NewPostDTO {
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

export const newPostDtoExtension = (newPost: FormPost): NewPostDTO => ({
  title: newPost.title,
  styledTitle: newPost.styledTitle,
  description: newPost.description,
  urlSlug: newPost.urlSlug,
  content: newPost.content,
  imagePath: newPost.imagePath?.replace('data:', '').replace(/^.+,/, ''),
  metaTitle: newPost.metaTitle,
  metaDescription: newPost.metaDescription,
  isVisible: newPost.isVisible,
  showInCarouselHomePage: newPost.showInCarouselHomePage,
  showInListHomePage: newPost.showInListHomePage,
  showInFaqList: newPost.showInFaqList,
  mainFaqPost: newPost.mainFaqPost,
  showInNewsList: newPost.showInNewsList,
  showInNewsSlider: newPost.showInNewsSlider,
  orderInCarouselHomePage: newPost.orderInCarouselHomePage,
  tags: newPost.tags,
});

export const newPostExtension = (dto: NewPostDTO): FormPost => ({ ...dto });

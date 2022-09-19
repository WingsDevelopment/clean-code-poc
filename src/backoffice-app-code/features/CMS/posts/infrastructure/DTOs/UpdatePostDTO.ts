import { FormPost } from '../../models/FormPost';

export interface UpdatePostDTO {
  id: string;
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

export const updatePostDtoExtension = (formPost: FormPost): UpdatePostDTO => ({
  ...formPost,
  id: formPost.id || '',
});
export const updatePostExtension = (dto: UpdatePostDTO): FormPost => ({ ...dto });

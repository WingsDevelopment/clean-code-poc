import { BaseModelDTO } from 'src/backoffice-app-code/infrastracture/DTOs/BaseModelDTO';
import { TagDTO } from '../../../tags/infrastracture/DTOs/TagDTO';
import { Post } from '../../models/Post';

export interface PostDTO extends BaseModelDTO {
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
  tags: TagDTO[];
}

export const postDtoExtension = (post: Post): PostDTO => ({ ...post });
export const postExtension = (dto: PostDTO): Post => ({ ...dto });

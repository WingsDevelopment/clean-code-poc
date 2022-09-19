import { NewTagDTO } from '../infrastracture/DTOs/NewTagDTO';
import { Tag } from './Tag';

export interface FormTag {
  id?: string;
  title: string;
  description?: string;
  urlSlug?: string;
  orderInCarouselHomePage?: number;
}

export const createEmptyNewTag = (): NewTagDTO => ({
  title: '',
});

export const createEmptyUpdateTag = (): FormTag => ({
  id: '',
  title: '',
});

export const createUpdateTag = (tag: Tag): FormTag => ({
  id: tag.id,
  title: tag.title,
  description: tag.description,
  orderInCarouselHomePage: tag.orderInCarouselHomePage,
  urlSlug: tag.urlSlug,
});

import { FormTag } from '../../models/FormTag';

export interface NewTagDTO {
  title: string;
  description?: string;
  urlSlug?: string;
  orderInCarouselHomePage?: number;
}

export const newTagDtoExtension = (newTag: FormTag): NewTagDTO => ({ ...newTag });
export const newTagExtension = (dto: NewTagDTO): FormTag => ({ ...dto });

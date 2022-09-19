import { FormTag } from '../../models/FormTag';

export interface UpdateTagDTO {
  id: string;
  title: string;
  description?: string;
  urlSlug?: string;
  orderInCarouselHomePage?: number;
}

export const updateTagDtoExtension = (formTag: FormTag): UpdateTagDTO => ({
  ...formTag,
  id: formTag.id || '',
});
export const updateTagExtension = (dto: UpdateTagDTO): FormTag => ({ ...dto });

import { BaseModelDTO } from 'src/backoffice-app-code/infrastracture/DTOs/BaseModelDTO';
import { Tag } from '../../models/Tag';

export interface TagDTO extends BaseModelDTO {
  title: string;
  description?: string;
  urlSlug?: string;
}

export const tagDtoExtension = (tag: Tag): TagDTO => ({ ...tag });
export const tagExtension = (dto: TagDTO): Tag => ({ ...dto });

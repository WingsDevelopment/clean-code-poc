import { Model } from 'src/backoffice-app-code/utils/omitUtils';
import { PostDTO } from '../infrastructure/DTOs/PostDTO';

export interface Post extends Model<PostDTO> {}

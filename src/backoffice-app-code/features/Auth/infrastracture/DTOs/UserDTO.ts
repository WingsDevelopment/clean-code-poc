import { User, UserType } from '../../models/User';

export interface UserDTO {
  partnerId: string;
  userRole: UserType;
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  token: string;
}

export const userExtension = (dto: UserDTO): User => ({
  ...dto,
});

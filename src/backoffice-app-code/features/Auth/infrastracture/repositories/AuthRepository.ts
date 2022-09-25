import { UserType } from '../../models/User';
import { UserDTO } from '../DTOs/UserDTO';

let UserData: UserDTO = {
  id: '77e526d6-72f2-4b79-bbd5-4a60da445444 ',
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@gmail.com',
  token: 'token',
  partnerId: 'partnerId',
  userRole: UserType.DISTRIBUTOR_PLATFORM_ADMIN,
};

// let UserData: User = {
//   id: '02e9c055-5b63-4e84-b403-23ecb34e54b7',
//   firstName: 'John',
//   lastName: 'Doe',
//   email: 'john.doe@gmail.com',
//   token: 'token',
//   partnerId: 'partnerId',
//   userRole: UserType.RETAILER_PLATFORM_ADMIN,
// };

const GetUser = async (): Promise<UserDTO | undefined> => UserData;

const Login = async (email: string, password: string): Promise<UserDTO | undefined> => UserData;

const Register = async (email: string, password: string): Promise<UserDTO | undefined> => UserData;

export const AuthRepository = {
  GetUser,
  Login,
  Register,
};

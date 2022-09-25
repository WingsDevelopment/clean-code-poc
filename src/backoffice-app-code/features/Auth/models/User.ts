export interface User {
  partnerId: string;
  userRole: UserType;
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  token: string;
}

export enum UserType {
  RETAILER_PLATFORM_ADMIN = 'RETAILER_PLATFORM_ADMIN',
  DISTRIBUTOR_PLATFORM_ADMIN = 'DISTRIBUTOR_PLATFORM_ADMIN',
}

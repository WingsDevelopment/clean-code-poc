import { User } from '../../models/User';

const USER_LOCALSTORAGE_KEY = 'startlife_backoffice_user';

// helper to get user from localstorage
export function getStoredUser(): User | undefined {
  const storedUser = localStorage.getItem(USER_LOCALSTORAGE_KEY);
  return storedUser ? JSON.parse(storedUser) : undefined;
}

export function setStoredUser(user: User): void {
  localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(user));
}

export function clearStoredUser(): void {
  localStorage.removeItem(USER_LOCALSTORAGE_KEY);
}

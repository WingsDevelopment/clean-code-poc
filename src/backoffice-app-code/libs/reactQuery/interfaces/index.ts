export interface Query<T> {
  data: T;
  error: any;
  isLoading: boolean;
}

export interface Mutation {
  mutateAsync: any;
  isLoading: boolean;
  error: any;
}

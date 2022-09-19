export type OmitExact<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type Model<T> = {
  [P in keyof T]: T[P];
};

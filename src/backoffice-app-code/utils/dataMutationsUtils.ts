import { useMemo } from 'react';

export const useDataGroupedByKeyValue = <T, Key extends keyof T>(
  data: T[],
  key: Key
): { [key: string | number]: T[] } =>
  useMemo(() => {
    let result = {} as { [key: string | number]: T[] };
    data.forEach((item) => {
      //check if item[key] value is string and its not undefined
      if (typeof item[key] !== 'string' && typeof item[key] !== 'number')
        throw new Error('Key value is not string or number');
      if (result[item[key] as unknown as string | number] === undefined) {
        result[item[key] as unknown as string | number] = [];
      }
      result[item[key] as unknown as string | number].push(item);
    });

    return result;
  }, [data, key]);

export const getServerErrorMessage = (error: any): string => {
  if (error === null || error === undefined) return '';

  if (error?.request?.status === 500) {
    return error;
  } else if (error?.request?.status === 404) {
    return 'Ups, problem sa serverom';
  } else {
    return 'Greska!';
  }
};

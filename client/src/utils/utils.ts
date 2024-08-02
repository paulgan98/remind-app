export const updateField = (field: string, val: any, obj: any): typeof obj => {
  return {
    ...obj,
    [field]: val,
  };
};

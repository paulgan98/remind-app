export const updateField = (field: string, val: any, obj: Object): Object => {
  return {
    ...obj,
    [field]: val,
  };
};

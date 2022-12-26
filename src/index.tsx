export const multiply = (a: number, b: number): Promise<number> => {
  return Promise.resolve(a * b);
};
export const sum = (a: number, b: number): Promise<number> => {
  return Promise.resolve(a + b);
};

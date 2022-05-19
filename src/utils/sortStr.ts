export const sortStr = (str: string) => {
  return window.btoa(
    str
      .split("")
      .sort((a, b) => a.localeCompare(b))
      .join("")
  );
};

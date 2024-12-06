export const UrlModificada = (Url) => {
  if (Url === undefined) return;
  Url = Url?.replace("dl=0", "raw=1");
  return Url;
};

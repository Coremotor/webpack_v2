export const removeAppLoader = () => {
  const appLoaderElement = document.querySelector("#app-loader");
  if (appLoaderElement) appLoaderElement.remove();
};

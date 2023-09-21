import { axiosRequest } from "modules/_shared/api/axios";
import { setPosts } from "modules/_shared/app/store/reducer";
import { AppDispatch } from "modules/_shared/root-store/store";
import { apiErrorHandler } from "modules/_shared/utils/api-error-handler";

export const fetchPosts = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await axiosRequest.get("posts");
      const { data: posts } = response;
      dispatch(setPosts(posts));
    } catch (error) {
      apiErrorHandler(error);
    }
  };
};

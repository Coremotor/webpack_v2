import { axiosRequest } from "modules/_shared/api/axios";
import { setIsLoading } from "modules/_shared/app-store/reducer";
import { AppDispatch } from "modules/_shared/root-store/store";
import { apiErrorHandler } from "modules/_shared/utils/api-error-handler";

export const request = () => {
  return async (dispatch: AppDispatch) => {
    try {
      await axiosRequest.get("/");
      // for example
      dispatch(setIsLoading(false));
    } catch (error) {
      apiErrorHandler(error);
    }
  };
};

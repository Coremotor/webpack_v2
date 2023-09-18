import {
  AuthorizationForm,
  AuthorizationHeader,
  AuthorizationLayout,
  SignInWithTravelline,
} from "modules/authorization/components";

const Authorization = () => {
  return (
    <AuthorizationLayout>
      <AuthorizationHeader />
      <AuthorizationForm />
      <SignInWithTravelline />
    </AuthorizationLayout>
  );
};
export default Authorization;

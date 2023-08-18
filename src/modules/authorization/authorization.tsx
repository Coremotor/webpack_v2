import {
  AuthorizationForm,
  AuthorizationHeader,
  AuthorizationLayout,
  SignInWithTravelline,
} from "./components";

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

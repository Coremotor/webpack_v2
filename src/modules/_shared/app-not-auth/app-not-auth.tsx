import React from "react";

const AppNotAuth = () => {
  const goToLoginPage = () => window.location.reload();

  return (
    <div>
      <div>Вы не авторизованы, попробуйте позже</div>
      <button onClick={goToLoginPage}>Перейти к странице авторизации</button>
    </div>
  );
};

export default AppNotAuth;

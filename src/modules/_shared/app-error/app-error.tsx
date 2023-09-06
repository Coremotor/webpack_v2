import React from "react";

const AppError = () => {
  const goToLoginPage = () => window.location.reload();

  return (
    <div>
      <div>Сервис авторизации недоступен, попробуйте позже</div>
      <button onClick={goToLoginPage}>Перейти к странице авторизации</button>
    </div>
  );
};

export default AppError;

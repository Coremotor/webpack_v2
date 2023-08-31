import { useAppDispatch } from "modules/_shared/root-store/hooks";
import { RoutesEnum } from "modules/_shared/router/routes";
import { Button, Form, Input } from "modules/_shared/ui";
import { setIsAuth } from "modules/authorization/store/reducer";
import { TAuthorizationFormFields } from "modules/authorization/types";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import styles from "./styles.module.css";

export const AuthorizationForm = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [form] = Form.useForm<TAuthorizationFormFields>();

  const onFinish = (values: TAuthorizationFormFields) => {
    console.log(values);
    dispatch(setIsAuth(true));
    navigate(RoutesEnum.MainScreen);
  };

  return (
    <Form
      layout="vertical"
      form={form}
      name="authorization"
      onFinish={onFinish}
      requiredMark={false}
    >
      <Form.Item
        className={styles.item}
        label={t("authorization.emailInputLabel")}
        name="email"
        rules={[
          {
            type: "email",
          },
          {
            required: true,
          },
        ]}
      >
        <Input placeholder="name@company.com" />
      </Form.Item>

      <Form.Item
        label={t("authorization.passwordInputLabel")}
        name="password"
        rules={[{ required: true }]}
      >
        <Input.Password placeholder={t("authorization.placeholderPassword")} />
      </Form.Item>

      <Button type="primary" htmlType="submit" block>
        {t("authorization.button")}
      </Button>
    </Form>
  );
};

import React from "react";
import { useTranslation } from "react-i18next";

const DocumentFlow = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div>{t("navigation.documentFlow")}</div>
    </div>
  );
};

export default DocumentFlow;

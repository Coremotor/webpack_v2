import { RoutesEnum } from "modules/_shared/router/routes";
import { Button, Result } from "modules/_shared/ui";
import { Component, ErrorInfo, ReactNode } from "react";

import styles from "./error-boundary.module.css";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error (error-boundary):", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className={styles.content}>
          <Result
            status="500"
            subTitle="Что то пошло не так."
            extra={
              <Button
                type="primary"
                onClick={() => window.location.replace(RoutesEnum.MainScreen)}
              >
                Вернуться на главную
              </Button>
            }
          />
        </div>
      );
    }

    return this.props.children;
  }
}

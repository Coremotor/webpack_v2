import { RoutesEnum } from 'modules/_shared/router/routes';
import { Component, ErrorInfo, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import styles from './error-boundary.module.css';

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
    console.error('Uncaught error (error-boundary):', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className={styles.content}>
          <div>
            <div>Что то пошло не так</div>
            <Link to={RoutesEnum.MainScreen}>Вернуться на главную</Link>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

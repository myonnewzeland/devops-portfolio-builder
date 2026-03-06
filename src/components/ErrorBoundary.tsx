import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // In production this would pipe to Sentry / DataDog RUM
    if (import.meta.env.DEV) {
      console.error("[ErrorBoundary] Uncaught error:", error, info.componentStack);
    }
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;

      return (
        <div className="min-h-screen flex items-center justify-center bg-background px-6">
          <div className="max-w-md text-center space-y-6">
            <p className="font-display text-xs tracking-[0.3em] text-docker-blue uppercase">
              System Error
            </p>
            <h1 className="text-2xl font-display font-bold gradient-text">
              Something went wrong
            </h1>
            <p className="text-sm font-body text-muted-foreground">
              {this.state.error?.message ?? "An unexpected error occurred."}
            </p>
            <button
              onClick={this.handleReset}
              className="px-6 py-2.5 rounded-lg bg-docker-blue/10 border border-docker-blue/30 text-docker-blue font-display text-xs tracking-widest uppercase hover:bg-docker-blue/20 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

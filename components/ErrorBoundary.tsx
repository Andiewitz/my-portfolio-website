import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-sanity-black text-white flex flex-col items-center justify-center p-4">
          <div className="bg-white/5 border border-white/10 p-8 rounded-lg max-w-md w-full text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/10 mb-6">
              <AlertTriangle className="w-8 h-8 text-sanity-red" />
            </div>
            <h1 className="text-xl font-bold mb-4 font-mono">System Critical Error</h1>
            <p className="text-gray-400 mb-8 text-sm">
              The application encountered an unexpected state and cannot continue.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="w-full flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-gray-200 transition-all"
            >
              <RefreshCw size={14} />
              Reinitialize System
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
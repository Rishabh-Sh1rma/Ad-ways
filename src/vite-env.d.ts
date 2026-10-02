/// <reference types="vite/client" />

declare module '@calid/react-embed' {
  import React from 'react';
  export function getCalApi(options?: {
    namespace?: string;
    embedLibUrl?: string;
  }): Promise<(action: string, options?: any) => void>;

  interface CalProps {
    namespace?: string;
    calLink: string;
    style?: React.CSSProperties;
    config?: Record<string, any>;
    calOrigin?: string;
    embedJsUrl?: string;
    className?: string;
  }

  const Cal: React.FC<CalProps>;
  export default Cal;
}

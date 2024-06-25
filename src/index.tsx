import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StyleSheetManager } from 'styled-components';
const shouldForwardProp = (prop: string) => !['isopen'].includes(prop);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StyleSheetManager shouldForwardProp={shouldForwardProp}>
    <App />
  </StyleSheetManager>
);

reportWebVitals();

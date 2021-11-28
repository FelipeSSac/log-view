import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from '../../../assets/styles/GlobalStyles';
import { Router } from '../../../routes';

export default function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <GlobalStyles />
        <Router />
      </BrowserRouter>
    </StrictMode>
  )
}
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { ReactKeycloakProvider } from '@react-keycloak/web';
import Keycloak from './infra/keycloak';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <ReactKeycloakProvider authClient={Keycloak}>
      <App />
    </ReactKeycloakProvider>   
  // </React.StrictMode>
);

export default App;

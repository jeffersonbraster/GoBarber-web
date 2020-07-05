import React from 'react';

import { AuthProvider } from './Auth';
import { Toast } from './Toast';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <Toast>{children}</Toast>
  </AuthProvider>
);

export default AppProvider;

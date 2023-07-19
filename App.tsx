// App.js

import React from 'react';
import Navigation from './src/navigation/Navigation';

const App = () => {
  const isAuthenticated = true; // Example: Set to true when the user is authenticated

  return <Navigation isAuthenticated={isAuthenticated} />;
};

export default App;

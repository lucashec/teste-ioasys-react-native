
import React from 'react';
import { StatusBar } from 'react-native';
import {} from 'react-native/Libraries/NewAppScreen';
import {AuthProvider} from './src/contexts/auth';
import Routes from './src/routes';
const App = () => {

  return (
    <>
    <AuthProvider>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes/>
    </AuthProvider>
    </>
  );
};


export default App;

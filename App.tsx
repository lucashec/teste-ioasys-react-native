
import React from 'react';
import { StatusBar } from 'react-native';
import {} from 'react-native/Libraries/NewAppScreen';
import ContextProvider from './src/contexts/context';
import Routes from './src/routes';
const App = () => {

  return (
    <>
      <ContextProvider>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes/>
      </ContextProvider>
    </>
  );
};


export default App;

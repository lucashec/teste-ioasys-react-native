import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from '../../pages/SignIn';
import Home from '../../pages/Home';
import BookDetails from "../../pages/BookDetails";
import { useAppContext } from "../../contexts/context";

const {Navigator, Screen} = createNativeStackNavigator();

const Stack: React.FC = () => {
  const {appContext} = useAppContext();
  return (
    <Navigator initialRouteName={appContext.auth ? 'Home' : 'SignIn'} 
    screenOptions={{headerShown: false}}>
         <Screen name="SignIn" component={SignIn}/>
         <Screen name="Home" component={Home}/>
         <Screen name="BookDetails" component={BookDetails}/>
    </Navigator>
);
}

export default Stack;
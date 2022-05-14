import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from '../../pages/SignIn';
import Home from '../../pages/Home';
import BookDetails from "../../pages/BookDetails";

const {Navigator, Screen} = createNativeStackNavigator();

export default function(){
    return (
        <Navigator initialRouteName="SignIn" screenOptions={{headerShown: false}}>
             <Screen name="SignIn" component={SignIn}/>
             <Screen name="Home" component={Home}/>
             <Screen name="BookDetails" component={BookDetails}/>
        </Navigator>
    )
}
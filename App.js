import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text} from "react-native";
import HomeScreen from "./screens/Home";
import ISSLocationScreen from "./screens/ISSLocation";
import MeteorScreen from "./screens/Meteor";


export default class App extends React.Component{
    render(){
        return(
          <NavigationContainer>
            <Stack.Navigator 
            initialRouteName = "Home"
            screenOptions = {{headershown:false}}
            >
              <Stack.Screen name = "Home" component = {HomeScreen}/>
              <Stack.Screen name = "ISSLocation" component = {ISSLocationScreen}/>
              <Stack.Screen name = "Meteor" component = {MeteorScreen}/>

            </Stack.Navigator>
          </NavigationContainer>
        );
    }
}

const Stack = createStackNavigator()

// expo install react-native-gesture-handler
// expo install react-native-reanimated
// expo install react-native-screens
// expo install react-native-safe-area-context
// expo install @react-native-community/masked-view
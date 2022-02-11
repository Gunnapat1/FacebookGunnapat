import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '@screens/Home';


const Stack = createStackNavigator();
const hederCenter = {
  headerTitleAlign: 'center'
}
  export default function MainNavigator(){
   
      return(
        <Stack.Navigator
          screenOptions={{headerShown : false}}
        >
            <Stack.Screen name="Home" component={HomeScreen} options={hederCenter}  />
        </Stack.Navigator>
      )
  }
  
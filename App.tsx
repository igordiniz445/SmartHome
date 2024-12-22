import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {HOME_SCREEN} from './src/constants/Navigators';
import { HomeScreen } from './src/screens/Home/Home';

const RootStack = createNativeStackNavigator();
function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name={HOME_SCREEN} component={HomeScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;

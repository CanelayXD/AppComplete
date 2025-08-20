import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './src/Presentation/views/home/Home';
import { RegisterScreen } from './src/Presentation/views/register/Register';
import { MenuScreen } from './src/Presentation/views/Menu/Menu';
import ChillScreen from './src/Presentation/views/Chill/Chill';  // Importa tus pantallas específicas
import CitasScreen from './src/Presentation/views/Citas/Citas';
import HotScreen from './src/Presentation/views/Hot/Hot';

export type RootStackParamList = {
  HomeScreen: undefined,
  RegisterScreen: undefined,
  MenuScreen: undefined,
  QuizScreen: undefined,
  ChillScreen: undefined,
  CitasScreen: undefined,
  HotScreen: undefined
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false 
      }}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            title: 'Registro',
            headerShown: true
          }}
        />
        <Stack.Screen
          name="MenuScreen"
          component={MenuScreen}
        />
        <Stack.Screen
          name="ChillScreen"
          component={ChillScreen}
        />
        <Stack.Screen
          name="CitasScreen"
          component={CitasScreen}
        />
        <Stack.Screen
          name="HotScreen"
          component={HotScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

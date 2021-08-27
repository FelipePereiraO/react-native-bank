import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routes from './src/routes/Routes';
import Pix from './src/pages/Pix';
import Cam from './src/components/Cam';
import Transferencia from './src/pages/Transferencia';
import Pagamentos from './src/pages/Pagamentos';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen  name="Route" component={Routes} />
        <Stack.Screen name="Pix" component={Pix} />
        <Stack.Screen name="Cam" component={Cam} />
        <Stack.Screen name="Transferencia" component={Transferencia}/>
        <Stack.Screen name="Pagamentos" component={Pagamentos}/>
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

export default App;
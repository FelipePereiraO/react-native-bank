import React from 'react'
import { Text, View } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function Routes(){
    return (
        <Tab.Navigator
          screenOptions={({route}) =>({
            
            headerTransparent: true,
            headerTitleStyle: {color: 'white'},
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused
                  ? 'home-sharp'
                  : 'home-sharp';
              } else if (route.name === 'Perfil') {
                iconName = focused ? 'person-sharp' : 'person-sharp';
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#1ac6ff',
            tabBarInactiveTintColor: '#b3b3b3',
          })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Perfil" component={Profile} />
        </Tab.Navigator>
        
      );
}
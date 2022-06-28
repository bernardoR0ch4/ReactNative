import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
import Categories from './pages/Categories';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

const TabNavigation = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <TabNavigation.Navigator screenOptions={{
      headerShown: false,
      tabBarStyle: { backgroundColor: '#BD9283', borderBottomWidth: 0 }
    }}>
      <TabNavigation.Screen
        name='HomeTabScreen'
        component={Home}
      />
      <TabNavigation.Screen
        name='CategoriesTabScreen'
        component={Categories}
      />
    </TabNavigation.Navigator>
  )
}

const DrawerNavigation = createDrawerNavigator();
const NavigationDrawer = () => {
  return (
    <DrawerNavigation.Navigator>
      <DrawerNavigation.Screen
        name="TabNavigationScreen"
        options={{ title: 'Home Principal' }}
        component={BottomTabNavigator} />
      <DrawerNavigation.Screen
        name="CategoriasDrawerScreen"
        component={Categories} />
    </DrawerNavigation.Navigator>

  )
}

const StackNavigation = createNativeStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <StackNavigation.Navigator>
        <StackNavigation.Screen
          name="Login"
          component={Login}
        />
        <StackNavigation.Screen
          name="HomeScreen"
          component={NavigationDrawer}
        />
      </StackNavigation.Navigator>
    </NavigationContainer>
  );
};

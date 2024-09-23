import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ToDoScreen from './todoScreen'; 
import Create from './Create';
import Search from './Search';
import Done from './Done';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const BottomTabNav = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#1e97f3',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { backgroundColor: '#fff' }, 
        }}
       >

       {/* ToDoScreen Tab */}
        <Tab.Screen
          name="ToDo"
          component={ToDoScreen}
          options={{
            headerShown:false,
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require('../../Images/todo-icon.png')}
                style={{ tintColor: color, width: size, height: size }}
              />
            ),
          }}
        />

        
        {/* Done Tab */}
        <Tab.Screen
          name="Completed"
          component={Done}
          options={{
            headerShown:false,
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require('../../Images/done.png')}
                //style={{ tintColor: color, width: size, height: size }}
                style={{ tintColor: color, width: 32, height: 32}}
              />
            ),
          }}
        />


        {/* Search Tab */}
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            headerShown:false,
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require('../../Images/search-icon.png')}
                style={{ tintColor: color, width: size, height: size }}
              />
            ),
          }}
        />

         {/* Tips Tab */}
         <Tab.Screen
          name="Tips"
          component={Create}
          options={{
            headerShown:false,
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require('../../Images/idea.png')}
                //style={{ tintColor: color, width: size, height: size }}
                style={{ tintColor: color, width: 26, height: 26 }}
              />
            ),
          }}
        />
 
      </Tab.Navigator>
    </NavigationContainer>  
  );
};



export default BottomTabNav;

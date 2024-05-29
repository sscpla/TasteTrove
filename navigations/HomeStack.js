import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from "@expo/vector-icons";
import Hit from '../screens/week1/Hit';
import Home from '../screens/week1/Home';
import Menuscreens from '../screens/week1/Menuscreens';
import TodoList from '../screens/week1/TodoList';



const Tab = createBottomTabNavigator();
export default function HomeStack() {
    return (
        <Tab.Navigator screenOptions={{ tabBarActiveTintColor: 'tomato', tabBarInactiveTintColor: 'gray' }}>
            <Tab.Screen
                name="Hit"
                component={Hit}
                options={{
                    tabBarLabel: "หน้าหลัก",
                    tabBarIcon: ({ color, size }) => (<FontAwesome name="home" color={color} size={size} />),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Todolist"
                component={TodoList}
                options={{
                    tabBarLabel: "สิ่งที่อยากทำ",
                    tabBarIcon: ({ color, size }) => (<FontAwesome name="list" color={color} size={size} />),
                    headerShown: false,
                }}
            />
          
            </Tab.Navigator>
            
    );
}


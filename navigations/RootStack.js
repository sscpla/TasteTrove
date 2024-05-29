import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/week1/Home";
import Hit from "../screens/week1/Hit";
import HomeStack from "./HomeStack";
import Indiamenu from "../screens/week1/Indiamenu";
import Menupla from "../screens/thailannd/Menupla";
import Japanmenu from "../screens/week1/๋Japanmenu";
import Menukai from "../screens/thailannd/Menukai";
import TodoList from "../screens/week1/TodoList";


const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator initialRouteName="BottomTab">
    <Stack.Screen name="Homestack" component={HomeStack} options={{ headerShown: false }} />
      <Stack.Screen name="Hit" component={Hit} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Indiamenu" component={Indiamenu} options={{ headerShown: false }} />
      <Stack.Screen name="Menupla" component={Menupla} options={{ headerShown: false }} />
      <Stack.Screen name="Japanmenu" component={Japanmenu} options={{ headerShown: false }} />
      <Stack.Screen name="Menukai" component={Menukai} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

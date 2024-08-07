import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { store } from "./store";
import HomeScreen from "./components/HomeScreen";
import RestaurantScreen from "./components/RestaurantScreen";
import CartScreen from "./components/Screens/CartScreen";
import ProcessingScreen from "./components/Screens/ProcessingScreen";
import ConfirmedOrderScreen from "./components/Screens/ConfirmedOrderScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false, // Hide headers globally
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Restaurant" component={RestaurantScreen} />
          <Stack.Screen
            name="Cart"
            component={CartScreen}
            options={{
              presentation: "modal",
            }}
          />
          <Stack.Screen
            name="Processing"
            component={ProcessingScreen}
            options={{
              presentation: "fullScreenModal",
            }}
          />
          <Stack.Screen
            name="Confirmed"
            component={ConfirmedOrderScreen}
            options={{
              presentation: "fullScreenModal",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

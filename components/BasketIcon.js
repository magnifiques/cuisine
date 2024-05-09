import { View, TouchableOpacity, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectCartTotal, selectCartItems } from "../slices/cartSlice";
import { useNavigation } from "@react-navigation/native";
import Currency from "react-currency-formatter";

export default function BasketIcon() {
  const cartItems = useSelector(selectCartItems);
  const navigation = useNavigation();

  const cartTotal = useSelector(selectCartTotal);

  if (cartItems.length === 0) return;
  return (
    <View className="absolute bottom-10 w-full z-50 text-center">
      <TouchableOpacity
        onPress={() => navigation.navigate("Cart")}
        className="bg-[#FFC100] mx-5 p-4 rounded-full flex-row items-center space-x-1"
      >
        <Text className="font-extrabold text-lg py-1 px-3">
          {cartItems.length}
        </Text>
        <Text className="flex-1 font-extrabold text-center text-lg">
          View Cart
        </Text>
        <Text className="text-gray-800 text-lg font-extrabold">
          <Currency currency="CAD" quantity={cartTotal} />
        </Text>
      </TouchableOpacity>
    </View>
  );
}

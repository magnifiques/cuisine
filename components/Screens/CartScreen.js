import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  ScrollView,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurantItems } from "../../slices/restaurantSlice";
import {
  removeFromCart,
  selectCartItems,
  selectCartTotal,
} from "../../slices/cartSlice";
import { urlFor } from "../../sanity";
import Currency from "react-currency-formatter";

export default function CartScreen() {
  const smartPhone = require("../../assets/smartphone.png");

  const navigation = useNavigation();
  const restaurants = useSelector(selectRestaurantItems);
  const [groupedCartItems, setGroupedCartItems] = useState([]);

  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const dispatch = useDispatch();

  useEffect(() => {
    const groupedItems = cartItems.reduce((result, item) => {
      (result[item.id] = result[item.id] || []).push(item);
      return result;
    }, {});

    setGroupedCartItems(groupedItems);
  }, [cartItems]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border  bg-white border-b-gray-100 shadow-lg">
          <Text className="text-lg font-bold text-center">Cart</Text>
          <Text className="text-lg font-bold text-center text-gray-400">
            {restaurants.title}
          </Text>
        </View>
        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
          <Image
            source={smartPhone}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <Text className="flex-1 font-semibold">Deliver in 30-50 minutes</Text>
          <TouchableOpacity>
            <Text className="text-[#D862BC]">Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView className="divide-y divide-gray-200">
          {Object.entries(groupedCartItems).map(([key, items]) => (
            <View
              key={key}
              className="flex-row items-center space-x-3 bg-white py-2 px-5"
            >
              <Text className="">{items.length} x</Text>
              <Image
                source={{ uri: urlFor(items[0]?.image).url() }}
                className="h-12 w-12 rounded-full"
              />
              <Text className="flex-1">{items[0].name}</Text>
              <Text className="font-semibold">
                <Currency quantity={items[0].price} currency="CAD" />
              </Text>

              <TouchableOpacity>
                <Text
                  className="text-[#D862BC]"
                  onPress={() => dispatch(removeFromCart({ id: key }))}
                >
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <View className="p-5 bg-white mt-5 space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-500">Subtotal</Text>
            <Text className="font-bold">
              <Currency quantity={cartTotal} currency="CAD" />
            </Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-gray-500">Delivery Fees</Text>
            <Text className="font-bold">
              <Currency quantity={5.99} currency="CAD" />
            </Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-gray-500">Additional Taxes</Text>
            <Text className="font-bold">
              <Currency quantity={5.99} currency="CAD" />
            </Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-gray-500">Order Total</Text>
            <Text className="font-bold">
              <Currency quantity={cartTotal + 11.98} currency="CAD" />
            </Text>
          </View>

          <TouchableOpacity className="rounded-lg bg-[#FFC100] p-4 ">
            <Text className="text-center text-lg font-semibold">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

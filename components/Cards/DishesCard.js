import { TouchableOpacity, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { urlFor } from "../../sanity";
import {
  MinusCircleIcon,
  PlusCircleIcon,
} from "react-native-heroicons/outline";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  selectCartItemsWithId,
  removeFromCart,
} from "../../slices/cartSlice";

export default function DishesCard({ id, name, brief, image, price }) {
  const [isPressed, setIsPressed] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => selectCartItemsWithId(state, id));

  const handlePress = () => {
    dispatch(addToCart({ id, name, brief, price, image }));
  };

  const removeItem = () => {
    if (!cartItems.length > 0) return;
    dispatch(removeFromCart({ id }));
  };
  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed((prev) => !prev)}
        className={`bg-white border border-gray-200 ${
          isPressed && "border-b-0"
        }`}
      >
        <View className="flex-row py-6 px-4">
          <View className="flex-1 pr-1">
            <Text className="font-bold text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{brief}</Text>

            <Text className="text-gray-800 font-bold pt-2">${price}</Text>
          </View>
          <View>
            <Image
              style={{ borderWidth: 1, borderColor: "#F3F3F4" }}
              source={{ uri: urlFor(image).url() }}
              className="h-20 w-20 bg-gray-300 p-4"
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className="bg-white px-4">
          <TouchableOpacity className="flex-row items-center space-x-2 pb-3">
            <MinusCircleIcon
              disabled={!cartItems.length}
              size={40}
              color={cartItems.length > 0 ? "#D862BC" : "gray"}
              onPress={() => removeItem()}
            />
            <Text>{cartItems.length}</Text>
            <PlusCircleIcon
              size={40}
              color="#D862BC"
              onPress={() => handlePress()}
            />
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}

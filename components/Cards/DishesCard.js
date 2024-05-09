import {
  TouchableOpacity,
  Text,
  View,
  Image,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import Currency from "react-currency-formatter";
import { urlFor } from "../../sanity";
import {
  MinusCircleIcon,
  PlusCircleIcon,
} from "react-native-heroicons/outline";

export default function DishesCard({ id, name, brief, image, price }) {
  const [isPressed, setIsPressed] = useState(false);
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

            <Text className="text-gray-800 font-bold pt-2">
              <Currency quantity={price} currency="CAD" />
            </Text>
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
            <MinusCircleIcon size={40} color="#D862BC" />
            <Text>0</Text>
            <PlusCircleIcon size={40} color="#D862BC" />
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}

import { TouchableOpacity, Text, Image, View } from "react-native";
import React from "react";

export default function CategoriesCard({ imgUrl, title }) {
  return (
    <TouchableOpacity className="mx-2 py-2 relative">
      <View className="flex justify-center items-center">
        <Image source={{ uri: imgUrl }} className="h-20 w-20 rounded" />
        <Text className="flex justify-center pt-2 text-black font-bold">
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

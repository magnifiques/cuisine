import { TouchableOpacity, Text, Image, View } from "react-native";
import React from "react";

export default function CategoriesCard({ imgUrl, title, setSelectedCategory }) {
  return (
    <TouchableOpacity
      className="mx-2 py-2 relative"
      onPress={() => setSelectedCategory(title)}
    >
      <View className="flex justify-center items-center" onT>
        <Image source={{ uri: imgUrl }} className="h-20 w-20 rounded" />
        <Text className="flex justify-center pt-2 text-black font-bold">
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

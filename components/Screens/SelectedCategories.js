import { View, Text } from "react-native";
import React from "react";

const SelectedCategories = ({ title, description }) => {
  return (
    <View className="mb-8">
      <View className="flex justify-center pb-3 overflow-visible">
        <View className="mt-4 flex-row items-center justify-between px-4">
          <Text className="font-bold text-xl">{title}</Text>
          <ArrowRightIcon size={20} color="#D862BC" />
        </View>
        <Text className="text-md text-gray-500 px-4 py-2">{description}</Text>
      </View>
    </View>
  );
};

export default SelectedCategories;

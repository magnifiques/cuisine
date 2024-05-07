import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/solid";
import RestaurantsCard from "../Cards/RestaurantsCard";

export default function FeaturedRows({ title, description, id }) {
  return (
    <View className="flex justify-center">
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon size={20} color="#00ccbb" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        className="pt-5"
      >
        {/* Restaurants Cards */}
        <RestaurantsCard
          title="Restaurant"
          rating={4}
          genre="Japanese"
          address="Lowes Hill"
        />
        <RestaurantsCard
          title="Restaurant"
          rating={3}
          genre="Lebanese"
          address="Gordon Street"
        />
        <RestaurantsCard
          title="Restaurant"
          rating={5}
          genre="Thai"
          address="WellingTon Road"
        />
        <RestaurantsCard
          title="Restaurant"
          rating={4}
          genre="Italian"
          address="Ryerson Street"
        />
        <RestaurantsCard
          title="Restaurant"
          rating={4.1}
          genre="Greek"
          address="Small Town Street"
        />
        <RestaurantsCard
          title="Restaurant"
          rating={4.4}
          genre="Indian"
          address="Little Delhi"
        />
      </ScrollView>
    </View>
  );
}

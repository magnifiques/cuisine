import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/solid";
import RestaurantsCard from "../Cards/RestaurantsCard";
import client from "../../sanity";

export default function FeaturedRows({ title, description, id }) {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    client
      .fetch(
        `*[_type == 'featured' && _id == $id] {
          ...,
          restaurants[] -> {
              ...,
            dishes[] -> {
              ...,
            },
            type -> {
              name,
            }
          }
          }[0]`,
        { id }
      )
      .then((data) => setRestaurants(data?.restaurants));
  }, []);
  return (
    <View className="flex justify-center py-3">
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-xl">{title}</Text>
        <ArrowRightIcon size={20} color="#00ccbb" />
      </View>
      <Text className="text-md text-gray-500 px-4 py-2">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        className="pt-5"
      >
        {/* Restaurants Cards */}
        {restaurants.map((restaurant) => {
          return (
            <RestaurantsCard
              key={restaurant._id}
              id={restaurant._id}
              title={restaurant.name}
              imgUrl={restaurant.image}
              rating={restaurant.rating}
              address={restaurant.address}
              dishes={restaurant.dishes}
              brief={restaurant.brief}
              genre={restaurant.type?.name}
              lat={restaurant.lat}
              long={restaurant.long}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

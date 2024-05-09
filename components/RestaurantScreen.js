import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
} from "react-native-heroicons/outline";
import { QuestionMarkCircleIcon, StarIcon } from "react-native-heroicons/solid";
import DishesCard from "./Cards/DishesCard";
import BasketIcon from "./BasketIcon";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../slices/restaurantSlice";

export default function RestaurantScreen({}) {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      brief,
      dishes,
      long,
      lat,
    },
  } = useRoute();

  useEffect(() => {
    dispatch(
      setRestaurant({
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        brief,
        dishes,
        long,
        lat,
      })
    );
  }, [dispatch]);

  useLayoutEffect(() =>
    navigation.setOptions({
      headerShown: false,
    })
  );
  return (
    <>
      <BasketIcon />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        <Image
          source={{ uri: urlFor(imgUrl).url() }}
          className="w-full h-56 bg-gray-300 p-4"
        />
        <TouchableOpacity
          onPress={navigation.goBack}
          className="absolute top-16 left-4 p-2 bg-gray-200 rounded-full"
        >
          <ArrowLeftIcon height={30} width={30} />
        </TouchableOpacity>
        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{title}</Text>

            <View className="flex-row space-x-2 my-3">
              <View className="flex-row space-x-1 items-center">
                <StarIcon color="green" opacity={0.7} size={22} />
                <Text className="text-green-500 text-lg">{rating}</Text>
              </View>

              <View className="flex-row space-x-1 items-center">
                <MapPinIcon color="gray" opacity={0.7} size={22} />
                <Text className="text-gray-500 text-lg">{address}</Text>
              </View>
            </View>
            <Text className="text-gray-600 text-md mt-2 pb-4">{brief}</Text>
          </View>

          {/* <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
            <QuestionMarkCircleIcon color="gray" opacity={0.7} size={25} />
            <Text className="flex-1 text-lg font-bold">
              Have A Food Allergy?
            </Text>
            <ChevronRightIcon color="#00CCBB" />
          </TouchableOpacity> */}
        </View>

        <ScrollView className="pb-36">
          <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>

          {dishes.map((dish) => {
            return (
              <DishesCard
                key={dish._id}
                id={dish._id}
                name={dish.name}
                brief={dish.brief}
                price={dish.price}
                image={dish.image}
              />
            );
          })}
        </ScrollView>
      </ScrollView>
    </>
  );
}

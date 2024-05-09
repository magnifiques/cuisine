import {
  Image,
  SafeAreaView,
  View,
  Text,
  TextInput,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ChevronDownIcon,
  UserCircleIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import CategoriesSection from "./Screens/CategoriesSection";
import FeaturedRows from "./Screens/FeaturedSection";
import client from "../sanity";
// import { SmartPhone } from "../constants";

export default function HomeScreen() {
  const smartPhone = require("../assets/smartphone.png");
  const navigation = useNavigation();
  const [featuredCategory, setFeaturedCategory] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    client
      .fetch(
        `*[_type == 'featured'] {
      ...,
      restaurant[] => {
        ...,
        dish[] => {
        
        }
      }
    }`
      )
      .then((data) => {
        setFeaturedCategory(data);
      });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image source={smartPhone} className="h-7 w-7 p-4 " />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
          <Text className="font-bold text-xl">
            Current Location {<ChevronDownIcon size={20} color="#D862BC" />}
          </Text>
        </View>
        <UserCircleIcon size={30} color="#D862BC" />
      </View>

      {/* Search bar */}
      <View className="flex-row items-center space-x-8 pb-2 mx-4 my-2">
        <View className="flex-row space-x-2 p-3 flex-1 rounded-full bg-gray-200">
          <MagnifyingGlassIcon size={20} color="gray" />
          <TextInput
            placeholder="Search Restaurants..."
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon size={30} color="#D862BC" />
      </View>

      <View className="bg-gray-200">
        <FlatList
          contentContainerStyle={{ paddingBottom: 140 }}
          data={featuredCategory}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <FeaturedRows
              id={item._id}
              key={item._id}
              title={item.name}
              description={item.brief}
              restaurants={item.restaurants}
            />
          )}
        />
      </View>
      <View>
        <Text>Wro</Text>
      </View>
    </SafeAreaView>
  );
}

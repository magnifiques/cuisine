import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  View,
  Text,
  TextInput,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  ChevronDownIcon,
  UserCircleIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import FeaturedRows from "./Screens/FeaturedSection";
import client from "../sanity";
import CategoriesSection from "../components/Screens/CategoriesSection";
import SelectedCategories from "./Screens/SelectedCategories";

export default function HomeScreen() {
  const smartPhone = require("../assets/smartphone.png");
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [featuredCategory, setFeaturedCategory] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false, // Keep header hidden
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
        // console.log(featuredCategory);
      });
  }, []);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "restaurant" && type->name == '${selectedCategory}'] {
          ...,
          restaurant[] => {
            ...,
            dish[] => {
            
            }
          }
        }`
      )
      .then((data) => {
        setSelectedCategories(data);
        console.log(data[0].name);
      });
  }, [selectedCategory]);

  return (
    <SafeAreaView className="bg-white flex-1">
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image source={smartPhone} className="h-7 w-7 p-4" />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
          <Text className="font-bold text-xl">
            Current Location <ChevronDownIcon size={20} color="#D862BC" />
          </Text>
        </View>
        <UserCircleIcon size={30} color="#D862BC" />
      </View>

      {/* Search Bar */}
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

      {/* Content */}

      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <CategoriesSection setSelectedCategory={setSelectedCategory} />
      </ScrollView>

      <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
        <Text className="text-xl font-semibold px-5 pt-6">Featured</Text>

        {featuredCategory.map((category) => (
          <FeaturedRows
            id={category._id}
            key={category._id}
            title={category.name}
            description={category.brief}
            restaurants={category.restaurants}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

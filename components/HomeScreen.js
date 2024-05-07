import {
  Image,
  SafeAreaView,
  View,
  Text,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ChevronDownIcon,
  UserCircleIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import CategoriesSection from "./Screens/CategoriesSection";
import FeaturedRows from "./Screens/FeaturedSection";
// import { SmartPhone } from "../constants";

export default function HomeScreen() {
  const smartPhone = require("../assets/smartphone.png");
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image source={smartPhone} className="h-7 w-7 p-4 " />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
          <Text className="font-bold text-xl">
            Current Location {<ChevronDownIcon size={20} color="#00CCBB" />}
          </Text>
        </View>
        <UserCircleIcon size={30} color="#00CCBB" />
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
        <AdjustmentsVerticalIcon size={30} color="#00CCBB" />
      </View>

      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <CategoriesSection />
        <FeaturedRows
          title="Featured1"
          description="lorem sadsadsad sdasadsad"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

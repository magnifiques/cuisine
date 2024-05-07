import { ScrollView, View, Text } from "react-native";
import React from "react";
import CategoriesCard from "../Cards/CategoriesCard";

export default function CategoriesSection() {
  const smartPhone = require("../../assets/smartphone.png");

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
    >
      <CategoriesCard imgUrl={smartPhone} title="testing1" />
      <CategoriesCard imgUrl={smartPhone} title="testing2" />
      <CategoriesCard imgUrl={smartPhone} title="testing3" />
      <CategoriesCard imgUrl={smartPhone} title="testing1" />
      <CategoriesCard imgUrl={smartPhone} title="testing2" />
      <CategoriesCard imgUrl={smartPhone} title="testing3" />
      <CategoriesCard imgUrl={smartPhone} title="testing1" />
      <CategoriesCard imgUrl={smartPhone} title="testing2" />
      <CategoriesCard imgUrl={smartPhone} title="testing3" />
    </ScrollView>
  );
}

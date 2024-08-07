import { ScrollView, View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import CategoriesCard from "../Cards/CategoriesCard";
import client, { urlFor } from "../../sanity";

export default function CategoriesSection({ setSelectedCategory }) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    client
      .fetch(
        `*[_type == 'category'] {
    ...,
  }`
      )
      .then((data) => setCategories(data));
  }, []);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
    >
      {categories.map((category) => {
        return (
          <CategoriesCard
            key={category._id}
            id={category._id}
            title={category.name}
            imgUrl={urlFor(category.image).width(200).url()}
            setSelectedCategory={setSelectedCategory}
          />
        );
      })}
    </ScrollView>
  );
}

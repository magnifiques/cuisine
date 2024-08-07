import { SafeAreaView, Text } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";

export default function ProcessingScreen() {
  const navigate = useNavigation();

  useEffect(() => {
    setTimeout(() => navigate.navigate("Confirmed"), 4000);
  }, []);

  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1 justify-center items-center">
      {/* <Animatable.Image
        source={require("../../assets/delivery.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
      /> */}

      <Progress.Circle size={60} indeterminate={true} color="white" />

      <Text className="text-lg my-10 p-4 text-white font-bold text-center">
        Waiting for Restaurant to Accept your Order...
      </Text>
    </SafeAreaView>
  );
}

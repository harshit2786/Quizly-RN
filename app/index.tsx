import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CustomButton from "../components/CustomButton";

const Welcome = () => {
  return (
    <SafeAreaView className=" bg-black h-full">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="w-full flex justify-center items-center h-full px-4">
          <Text className=" text-secondary-200 text-4xl font-semibold "> Welcome to Quizly </Text>

          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
            Enter a topic, and the app generates a 10-question quiz tailored just for you!
            </Text>
          </View>

          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
          No sign-ups, no internet dependency after the quiz is generated — just open and play.
          </Text>

          <CustomButton
            title="Get Started"
            handlePress={() => router.push('/(home)')}
            containerStyles="w-full mt-7 bg-secondary"
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default Welcome;

import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import { View, Text, Image, ScrollView , TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import { useState } from "react";


const Welcome = () => {
  const [value,setValue] = useState('');
  const handleSubmit = () => {
    if(value === ""){
      return;
    }
    router.navigate(`/(quiz)?topic=${value}`)
  }
  return (
    <SafeAreaView className=" bg-black h-full">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="w-full flex justify-center items-center h-full px-4">
          <Text className=" text-secondary-200 text-4xl font-semibold text-center "> Ready to Test Yourself? </Text>

          <TextInput value={value} onChangeText={setValue} placeholderTextColor={"#4b5563"} className=" bg-white w-full mt-6 p-4 rounded-lg " placeholder="Seach for a topic.." ></TextInput>

          <CustomButton
            title="Start Quiz"
            handlePress={handleSubmit}
            containerStyles="w-full my-8 bg-secondary"
          />
          <CustomButton
            title="View Previous Quizes"
            handlePress={() => router.push('/(history)')}
            containerStyles="w-full my-8 bg-[#451a03]"
            textStyles="text-white"
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default Welcome;

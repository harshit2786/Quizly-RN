import CustomButton from "@/components/CustomButton";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Result() {
  const { score, topic } = useLocalSearchParams();
  useEffect(() => {
    if(typeof score !== "string" || typeof topic !== "string"){
        router.navigate('/(home)');
    }
  },[score,topic])
  return (
    <SafeAreaView className=" bg-black h-full">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="w-full flex flex-col justify-center items-center h-full px-4">
          <Text className="text-xl py-4 text-secondary">
            {typeof topic === "string" ? topic : "Error"}
          </Text>
          <Text className="text-white">
            You scored{" "}
            {typeof score === "string" ? (
              <Text className="text-secondary my-4">{`${score}/10`}</Text>
            ) : (
              "Error"
            )}{" "}
          </Text>
          <CustomButton
            title="Take more quizes"
            handlePress={() => router.navigate("/(home)")}
            containerStyles="my-8 bg-secondary w-full"
          />
          <CustomButton
          title="View Previous Quizes"
          handlePress={() => router.push('/(history)')}
          containerStyles="w-full my-8 bg-[#451a03]"
          textStyles="text-white"
        />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

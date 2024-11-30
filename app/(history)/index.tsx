import Collapsabe from "@/components/Collapsabe";
import CustomButton from "@/components/CustomButton";
import Loader from "@/components/Loader";
import { StoredData } from "@/utils/model";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function History() {
  const [history, setHistory] = useState<StoredData[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const resp = await AsyncStorage.getItem("prev-quizes");
        if (resp) {
          setHistory(JSON.parse(resp));
        }
        setLoading(false);
      } catch (e) {
        console.log(e);
        router.navigate("/(home)");
      }
    };
    fetchHistory();
  }, []);
  return (
    <SafeAreaView className=" bg-black h-full">
      <ScrollView
        
      >
        <View className="w-full flex justify-center items-center h-full px-4">
          {loading ? <Loader/> : <>
            <Text className="text-secondary text-3xl py-10">Previous Quizes</Text>
            {history.reverse().map((it, index) => (
              <Collapsabe ind={index} quiz={it} />
            ))}
            
          </>}
          <CustomButton
              title="Take more quizes"
              handlePress={() => router.navigate("/(home)")}
              containerStyles="my-8 bg-secondary w-full"
            />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

import React from "react";
import { View } from "react-native";

const ProgressBar = ({ ind }: { ind: number }) => {
  const numbers = Array.from({ length: 10 }, (_, i) => i);
  return (
    <View className="w-full h-6 flex flex-row mb-8 mt-4">
      {numbers.map((it) =>
        it === 0 ? (
          <View key={it} className={`w-[10%] h-full rounded-l-full ${ind <= it ? "bg-gray-500" : "bg-secondary" } `}></View>
        ) : it === 9 ? (
          <View key={it} className={`w-[10%] h-full rounded-r-full ${ind <= it ? "bg-gray-500" : "bg-secondary" }`}></View>
        ) : (
          <View key={it} className={`w-[10%] h-full ${ind <= it ? "bg-gray-500" : "bg-secondary" }`} ></View>
        )
      )}
    </View>
  );
};

export default ProgressBar;

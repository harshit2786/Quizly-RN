import { Answers, QuesObj } from "@/utils/model";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import OptionButton from "./OptionButton";
import { useEffect, useState } from "react";
import CustomButton from "./CustomButton";

const QuestionCard = ({ques, handleSubmit } : {ques : QuesObj , handleSubmit : (ans : Answers) => void}) => {
    const [selected,setSelected] = useState<Answers | null>(null);
    const handleButtonPress = () => {
        if(selected === null){
            return
        }
        else{
            handleSubmit(selected);
        }
    }
    useEffect(() => {
        setSelected(null);
    },[ques])
  return (
    <View className="w-full items-center" >
        <Text className=" text-lg text-white py-2 text-center" >{ques.ques}</Text>
        <OptionButton isSelected={selected === Answers.A } handlePress={() => setSelected(Answers.A)} title={ques.choices.a} />
        <OptionButton isSelected={selected === Answers.B } handlePress={() => setSelected(Answers.B)} title={ques.choices.b} />
        <OptionButton isSelected={selected === Answers.C } handlePress={() => setSelected(Answers.C)} title={ques.choices.c} />
        <OptionButton isSelected={selected === Answers.D } handlePress={() => setSelected(Answers.D)} title={ques.choices.d} />
        <CustomButton containerStyles="bg-secondary my-4" title="Submit" handlePress={handleButtonPress} />
    </View>
  );
};

export default QuestionCard;

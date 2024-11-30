import { Answers, QuesObj, StoredData } from "@/utils/model";
import React, { useState } from "react";
import Collapsible from "react-native-collapsible";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { formatTimestamp } from "@/utils/helper";

const RenderQuestion = ({
  question,
  resp,
  ind,
}: {
  question: QuesObj;
  resp: Answers;
  ind: number;
}) => {
  return (
    <View key={ind} className="my-4 flex flex-col gap-2 text-white ">
      <Text className="text-white">{question.ques}</Text>
      {Object.keys(question.choices).map((it, index) => (
        <Text
          key={index}
          className={` ${
            question.ans === it ? " text-secondary" : "text-white"
          }`}
        >
          {`${it}) ${question.choices[it]}`}
        </Text>
      ))}
      <Text
        className={`${
          resp === question.ans ? " text-green-300" : " text-red-300"
        }`}
      >{`Your response: ${resp}`}</Text>
    </View>
  );
};

const Collapsabe = ({ quiz, ind }: { quiz: StoredData; ind: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  function calScore(q: StoredData) {
    let score = 0;
    q.questions.map((it, ind) => {
      if (it.ans === q.response[ind]) {
        score++;
      }
    });
    return score;
  }
  return (
    <TouchableWithoutFeedback onPress={() => setIsOpen((prev) => !prev)}>
      <View
        key={ind}
        className={`w-[90%] border border-secondary p-4 my-4 rounded-lg  `}
      >
        <Text className={`text-lg text-secondary `}>{quiz.topic}</Text>
        <Text className="text-gray-500">
          {formatTimestamp(Number(quiz.timeStamp))}
        </Text>
        <ScrollView>
          <Collapsible collapsed={isOpen}>
            {quiz.questions.map((it, ind) => (
              <RenderQuestion
                resp={quiz.response[ind]}
                ind={ind}
                question={it}
              />
            ))}
            <Text className=" text-secondary">{`Final Score : ${calScore(
              quiz
            )}/${quiz.questions.length}`}</Text>
          </Collapsible>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default Collapsabe;

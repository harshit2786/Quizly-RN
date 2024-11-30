import Loader from "@/components/Loader";
import QuestionCard from "@/components/QuestionCard";
import Tick from "@/components/Tick";
import Wrong from "@/components/Wrong";
import { fetchQuizQuestions, storeData } from "@/utils/helper";
import { Answers, QuesObj, Response, StoredData } from "@/utils/model";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Quiz() {
  const { topic } = useLocalSearchParams();
  const [questions, setQuestions] = useState<QuesObj[]>([]);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers[]>([]);
  const [corr, setCorr] = useState<Response | null>(null);
  const handleAnimate = (ans: Answers) => {
    if (questions[index].ans === ans) {
      setCorr(Response.C);
    } else {
      setCorr(Response.W);
    }
    setTimeout(() => handleSubmit(ans), 2000);
  };
  const handleSubmit = (ans: Answers) => {
    if (index < 9) {
      setAnswers((prev) => [...prev, ans]);
      setIndex((prev) => prev + 1);
      setCorr(null);
    } else {
      let score = 0;
      const finalAns = [...answers, ans];
      questions.map((it, ind) => {
        if (it.ans === finalAns[ind]) {
          score++;
        }
      });
      const storeObj: StoredData = {
        timeStamp: String(Date.now()),
        topic: typeof topic === "string" ? topic : "",
        questions,
        response: answers,
      };
      storeData(storeObj);
      setTimeout(() => {
        setCorr(null);
        router.navigate(`/(result)?topic=${topic}&score=${score}`);
      }, 1500);
    }
  };
  useEffect(() => {
    const fetchingQues = async (topic: string) => {
      try {
        const resp = await fetchQuizQuestions(topic);
        setQuestions(resp.quiz);
      } catch (e) {
        console.log(e);
        router.navigate("/(home)");
      }
    };
    if (topic && typeof topic === "string") {
      fetchingQues(topic);
    } else {
      router.navigate("/(home)");
    }
  }, [topic]);
  return (
    <SafeAreaView className=" bg-black h-full">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="w-full flex justify-center items-center h-full px-4">
          {questions.length === 0 ? (
            <Loader />
          ) : corr === null ? (
            <>
              <Text>{typeof topic === "string" && topic}</Text>
              <QuestionCard
                ques={questions[index]}
                handleSubmit={handleAnimate}
              />
            </>
          ) : corr === Response.C ? (
            <Tick />
          ) : (
            <View className="flex flex-col items-center justify-center">
              <Wrong />
              <Text className="text-center text-white">{`The correct answer was "${
                questions[index].choices[questions[index].ans]
              }"`}</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

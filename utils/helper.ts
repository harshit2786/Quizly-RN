import AsyncStorage from "@react-native-async-storage/async-storage";
import { StoredData } from "./model";

export const fetchQuizQuestions = async (topic: string) => {
  const response = await fetch(`https://2815-2401-4900-1cc4-f340-b160-7848-a278-e6cd.ngrok-free.app/getquiz`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ topic }),
    mode:"cors"
  });
  const data = await response.json();
  if(!response.ok){
    console.log("error",data)
    throw new Error('An error occured');
  }
  return data;
};



export const storeData = async ( value : StoredData) => {
  try {
    const prevValasString = await AsyncStorage.getItem('prev-quizes');
    const prevVal : StoredData[] =  prevValasString === null ? [] : JSON.parse(prevValasString); 
    const newData = [...prevVal, value]
    await AsyncStorage.setItem('prev-quizes', JSON.stringify(newData));
  } catch (e) {
    return;
  }
};

export function formatTimestamp(timestamp: number): string {
  const date = new Date(timestamp);
  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  };
  return date.toLocaleDateString('en-US', options);
}
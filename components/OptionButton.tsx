import { ActivityIndicator, Text, TouchableOpacity } from "react-native";

const OptionButton = ({
  title,
  handlePress,
  isSelected
}: {
  title: string;
  handlePress: () => void;
  isSelected : boolean
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={` rounded-xl min-h-[62px] my-2 flex flex-row justify-center items-center ${
        isSelected ? " border border-secondary" : " border border-gray-500 "
      }`}
    >
      <Text className={`font-psemibold text-lg ${isSelected ? " text-secondary" : " text-gray-500"}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default OptionButton;

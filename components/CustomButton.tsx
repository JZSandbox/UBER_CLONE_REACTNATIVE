import { TouchableOpacity } from "react-native";

const CustomButton = ({ onPress, title, bgVariant = "primary", textVariant = "default", IconLeft, IconRight, className, ...}) => {
  return
  <TouchableOpacity onPress={onPress}>
    {IconLeft && <IconLeft></IconLeft>}
    <Text>{title}</Text>
    {IconRight && <IconLRight></IconLRight>}
  </TouchableOpacity>;
};

export default CustomButton;

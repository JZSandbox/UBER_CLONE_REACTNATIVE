import { TouchableOpacity, Text } from "react-native";

const CustomButton = ({
  onPress,
  title,
  bgVariant = "primary",
  textVariant = "default",
  IconLeft,
  IconRight,
  buttonStyle,
  textStyle,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      {IconLeft && <IconLeft></IconLeft>}
      <Text style={textStyle}>{title}</Text>
      {IconRight && <IconLRight></IconLRight>}
    </TouchableOpacity>
  );
};

export default CustomButton;

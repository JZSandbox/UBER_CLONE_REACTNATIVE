import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View,
  Text,
  StyleSheet,
} from "react-native";

const InputField = ({
  label,
  labelStyle,
  icon,
  secureTextEntry = false,
  containerStyle,
  inputStyle,
  iconStyle,
  className,
}) => {
  return (
    <KeyboardAvoidingView>
      <TouchableWithoutFeedback>
        <View style={styles.container}>
          <Text style={styles.text} className={`${labelStyle}`}>
            {label}
          </Text>
          <View style={styles.iconPlace}></View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default InputField;

const styles = StyleSheet.create({
  iconPlace: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  container: {
    marginTop: 1,
    marginBottom: 1,
    width: "100%",
  },
  text: {
    fontSize: 18,
    marginBottom: 3,
  },
});

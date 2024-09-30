import { View, ScrollView, Text, StyleSheet, Image } from "react-native";
import { images } from "@/app/constants";
import InputField from "@/components/InputField";
import { useState } from "react";
import { icons } from "@/app/constants";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={styles.innerContainer}>
          <Image source={images.signupCar} style={styles.img} />
          <Text style={styles.headerText}>Create your Account</Text>
        </View>
        <View style={styles.bottomContainer}>
          <InputField
            label={"Name"}
            placeHolder={"Enter your name"}
            icon={icons.check}
            value={form.name}
            onChangeText={() => setForm({ ...form, name: form.name })}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  bottomContainer: {
    paddingTop: 5,
  },
  headerText: {
    position: "absolute",
    bottom: 30,
    color: "black",
    fontSize: 22,
    left: 10,
  },
  container: {
    display: "flex",
    backgroundColor: "#ffffff",
  },
  innerContainer: {
    position: "relative",
    width: "100%",
    height: 250,
  },
  img: {
    zIndex: 0,
    width: "100%",
    height: 250,
  },
});

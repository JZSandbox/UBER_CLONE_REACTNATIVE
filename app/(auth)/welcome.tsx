import { router } from "expo-router";
import { useRef, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";
import { onBoarding } from "../constants";

const Onboarding = () => {
  const pressButtonHandler = () => {
    router.replace("/(auth)/sing-in");
  };
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => pressButtonHandler()}
      >
        <Text style={styles.text}>Skip</Text>
      </TouchableOpacity>
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={<View style={styles.swiperDot} />}
        activeDot={<View style={styles.swiperDotActive} />}
        onIndexChanged={(index) => setActiveIndex(index)}
        style={styles.swiperStyle}
      >
        {onBoarding.map((items) => (
          <View key={items.id} style={styles.slider}>
            <Image source={items.image} style={styles.image} />
            <Text style={styles.textBelowImage}>{items.title}</Text>
            <View>
              <Text style={styles.desc}>{items.description}</Text>
            </View>
          </View>
        ))}
      </Swiper>
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  desc: {
    fontSize: 20,
    color: "#858585",
    textAlign: "center",
    paddingHorizontal: 12,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  slider: {
    display: "flex",
    alignItems: "center",
  },
  swiperStyle: {
    paddingTop: 10,
    paddingLeft: 5,
    paddingRight: 5,
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
  },
  textBelowImage: {
    color: "#040404", // Kann auf "white" geändert werden, je nach Hintergrund
    fontSize: 28,
    textAlign: "center",
    fontWeight: "bold",
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  swiperDotActive: {
    width: 52,
    height: 4,
    marginHorizontal: 0,
    backgroundColor: "#145ea5",
    borderRadius: 999,
  },
  swiperDot: {
    width: 32,
    height: 4,
    marginHorizontal: 5,
    backgroundColor: "#E2E8F0",
    borderRadius: 999,
  },
  button: {
    backgroundColor: "#016aca",
    borderRadius: 10, // Abgerundete Ecken
    paddingHorizontal: 20, // Horizontale Pufferung für den Text
    paddingVertical: 8, // Vertikale Pufferung für den Text
    alignItems: "center", // Text im Button zentrieren
    justifyContent: "center",
    alignSelf: "flex-end", // Button an das Ende des Bildschirms platzieren
    marginHorizontal: 10,
    marginVertical: 5,
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 14,
    textTransform: "uppercase",
  },
});

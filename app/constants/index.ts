import adaptiveIcon from "@/assets/images/adaptive-icon.png";
import check from "@/assets/images/check.png";
import favicon from "@/assets/images/favicon.png";
import getStarted from "@/assets/images/get-started.png";
import icon from "@/assets/images/icon.png";
import message from "@/assets/images/message.png";
import noResult from "@/assets/images/no-result.png";
import onboarding1 from "@/assets/images/onboarding1.png";
import onboarding2 from "@/assets/images/onboarding2.png";
import onboarding3 from "@/assets/images/onboarding3.png";
import partialReactLogo from "@/assets/images/partial-react-logo.png";
import reactLogo from "@/assets/images/react-logo.png";
import signupCar from "@/assets/images/signup-car.png";
import splash from "@/assets/images/splash.png";

// Icons Object
export const icons = {
  adaptiveIcon,
  check,
  favicon,
  icon,
  partialReactLogo,
  reactLogo,
};

// Images Object
export const images = {
  getStarted,
  message,
  noResult,
  onboarding1,
  onboarding2,
  onboarding3,
  signupCar,
  splash,
};

export const onBoarding = [
  {
    id: 1,
    title: "Deine perfekte Fahrt",
    description: "Starte jetzt mit Swift und erlebe schnelle, bequeme Fahrten.",
    image: images.onboarding1,
  },
  {
    id: 2,
    title: "Fahren, wann du willst",
    description: "Finde jederzeit eine schnelle Fahrt, wo immer du bist.",
    image: images.onboarding2,
  },
  {
    id: 3,
    title: "Nur ein Klick zur Fahrt",
    description: "Mit Swift erreichst du dein Ziel einfach und schnell.",
    image: images.onboarding3,
  },
];

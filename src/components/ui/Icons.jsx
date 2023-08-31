import zero from "../../assets/weather-icons/0.svg";
import one from "../../assets/weather-icons/1.svg";
import two from "../../assets/weather-icons/2.svg";
import three from "../../assets/weather-icons/3.svg";
import fortyFive from "../../assets/weather-icons/45.svg";
import fortyEight from "../../assets/weather-icons/48.svg";
import fiftyOne from "../../assets/weather-icons/51.svg";
import fiftyThree from "../../assets/weather-icons/53.svg";
import fiftyFive from "../../assets/weather-icons/55.svg";
import fiftySix from "../../assets/weather-icons/56.svg";
import fiftySeven from "../../assets/weather-icons/57.svg";
import sixtyOne from "../../assets/weather-icons/61.svg";
import sixtyThree from "../../assets/weather-icons/63.svg";
import sixtyFive from "../../assets/weather-icons/65.svg";
import sixtySix from "../../assets/weather-icons/66.svg";
import sixtySeven from "../../assets/weather-icons/67.svg";
import seventyOne from "../../assets/weather-icons/71.svg";
import seventyThree from "../../assets/weather-icons/73.svg";
import seventyFive from "../../assets/weather-icons/75.svg";
import seventySeven from "../../assets/weather-icons/77.svg";
import eighty from "../../assets/weather-icons/80.svg";
import eightyOne from "../../assets/weather-icons/81.svg";
import eightyTwo from "../../assets/weather-icons/82.svg";
import eightyFive from "../../assets/weather-icons/85.svg";
import eightySix from "../../assets/weather-icons/86.svg";

export default function Icons({ icon }) {
  switch (icon) {
    case 0:
      return <img src={zero} alt="weather Icon" />;
    case 1:
      return <img src={one} alt="weather Icon" />;
    case 2:
      return <img src={two} alt="weather Icon" />;
    case 3:
      return <img src={three} alt="weather Icon" />;
    case 45:
      return <img src={fortyFive} alt="weather Icon" />;
    case 48:
      return <img src={fortyEight} alt="weather Icon" />;
    case 51:
      return <img src={fiftyOne} alt="weather Icon" />;
    case 53:
      return <img src={fiftyThree} alt="weather Icon" />;
    case 55:
      return <img src={fiftyFive} alt="weather Icon" />;
    case 56:
      return <img src={fiftySix} alt="weather Icon" />;
    case 57:
      return <img src={fiftySeven} alt="weather Icon" />;
    case 61:
      return <img src={sixtyOne} alt="weather Icon" />;
    case 63:
      return <img src={sixtyThree} alt="weather Icon" />;
    case 65:
      return <img src={sixtyFive} alt="weather Icon" />;
    case 66:
      return <img src={sixtySix} alt="weather Icon" />;
    case 67:
      return <img src={sixtySeven} alt="weather Icon" />;
    case 71:
      return <img src={seventyOne} alt="weather Icon" />;
    case 73:
      return <img src={seventyThree} alt="weather Icon" />;
    case 75:
      return <img src={seventyFive} alt="weather Icon" />;
    case 77:
      return <img src={seventySeven} alt="weather Icon" />;
    case 80:
      return <img src={eighty} alt="weather Icon" />;
    case 81:
      return <img src={eightyOne} alt="weather Icon" />;
    case 82:
      return <img src={eightyTwo} alt="weather Icon" />;
    case 85:
      return <img src={eightyFive} alt="weather Icon" />;
    case 86:
      return <img src={eightySix} alt="weather Icon" />;
    default:
      return null; // or return some default icon or message
  }
}
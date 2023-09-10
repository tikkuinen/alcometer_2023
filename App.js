import { useMemo, useState } from "react";
import { StatusBar } from "expo-status-bar";
import Styles, { DarkTheme, LightTheme } from "./styles/Styles";
import RadioGroup from "react-native-radio-buttons-group";

import {
  ScrollView,
  Text,
  TextInput,
  View,
  Switch,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

export default function App() {
  const [weight, setWeight] = useState(10);
  const [bottles, setBottles] = useState(1);
  const [gender, setGender] = useState("male");
  const [time, setTime] = useState(1);

  const [level, setLevel] = useState(0);

  const [style, setStyle] = useState(true);

  let currentStyle = style ? DarkTheme : LightTheme;

  // liittyy statusbariiin ei tarvi
  const [hidden, setHidden] = useState(false);

  // const radioButtons = useMemo(
  //   () => [
  //     {
  //       id: "1", // acts as primary key, should be unique and non-empty string
  //       label: "Mies",
  //       value: "mies",
  //     },
  //     {
  //       id: "2",
  //       label: "Nainen",
  //       value: "nainen",
  //     },
  //   ],
  //   []
  // );

  const [selectedId, setSelectedId] = useState();

  function calculate() {
    // jonkin sortin tarkistuksia
    let validated = weight > 0 ? weight : 80;
    console.log(validated);

    // tarkista tarviiko olla noita Number
    let litres = Number(bottles) * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = Number(validated) / 10;
    let gramsLeft = grams - burning * Number(time);

    // kato onko tää hyvä
    if (gender === "male") {
      result = gramsLeft / (weight * 0.7);
    } else {
      result = gramsLeft / (weight * 0.6);
    }

    if (result < 0) {
      result = 0;
    }
    result = result.toFixed(2);
    setLevel(result);
  }

  const CalculateButton = () => {
    return (
      <TouchableOpacity onPress={calculate}>
        <View style={currentStyle.button}>
          <Text style={currentStyle.buttonText}>Calculate</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={currentStyle.container}>
      <View style={currentStyle.headerArea}>
        <View style={currentStyle.switchArea}>
          <Switch title="Toggle StatusBar"></Switch>
        </View>
        <View style={currentStyle.header}>
          <Text style={currentStyle.headerText}>Alcometer</Text>
        </View>
      </View>

      <View style={currentStyle.inputArea}>
        <View style={currentStyle.inputView}>
          <View>
            <Text style={currentStyle.labelText}>Set weight</Text>
          </View>
          <View>
            <TextInput
              style={currentStyle.input}
              onChangeText={setWeight}
              value={weight}
              keyboardType="number-pad"
            />
          </View>
        </View>

        <View style={currentStyle.inputView}>
          <View>
            <Text style={currentStyle.labelText}>Bottles</Text>
          </View>
          <View>
            <Text> nappula</Text>
          </View>
        </View>

        <View style={currentStyle.inputView}>
          <View>
            <Text style={currentStyle.labelText}>Time</Text>
          </View>
          <View>
            <Text> nappula</Text>
          </View>
        </View>
      </View>

      <View style={currentStyle.buttonArea}>
        <Text style={currentStyle.result}>{level}</Text>

        <CalculateButton />
      </View>
    </SafeAreaView>
  );
}

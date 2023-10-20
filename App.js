import { useState, useMemo, useEffect } from "react";
import { DarkTheme, LightTheme } from "./styles/Styles";
import NumericInput from "react-native-numeric-input";
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
  const [weight, setWeight] = useState("80");
  const [bottles, setBottles] = useState(1);
  const [gender, setGender] = useState("male");
  const [time, setTime] = useState(1);
  const [level, setLevel] = useState(0);
  const [style, setStyle] = useState(true);

  let currentStyle = style ? DarkTheme : LightTheme;

  let resultStyle =
    level <= 0.2 ? currentStyle.resultOk : currentStyle.resultNo;

  const CalculateButton = () => {
    function calculate() {
      // validaatiot
      if (weight === "") {
        alert("Please insert weight");
        return;
      }
      // tarkista tarviiko olla noita Number
      let litres = Number(bottles) * 0.33;
      let grams = litres * 8 * 4.5;
      let burning = Number(weight) / 10;
      let gramsLeft = grams - burning * Number(time);
      let result = 0;

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
    return (
      <TouchableOpacity onPress={calculate}>
        <View style={currentStyle.button}>
          <Text style={currentStyle.buttonText}>Calculate</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const SexRadioButton = () => {
    const radioButtons = useMemo(
      () => [
        {
          id: "male",
          label: "Male",
        },
        {
          id: "female",
          label: "Female",
        },
      ],
      []
    );

    return (
      <>
        <View style={currentStyle.radioView}>
          <View>
            <RadioGroup
              radioButtons={radioButtons}
              onPress={setGender}
              selectedId={gender}
              layout="row"
            />
          </View>
        </View>
      </>
    );
  };

  const BottleInput = () => {
    return (
      <>
        <View style={currentStyle.inputView}>
          <View>
            <Text style={currentStyle.labelText}>Bottles</Text>
          </View>
          <View>
            <NumericInput
              rounded
              minValue={0}
              maxValue={5}
              value={bottles}
              onChange={(val) => setBottles(val)}
            ></NumericInput>
          </View>
        </View>
      </>
    );
  };

  const TimeInput = () => {
    return (
      <>
        <View style={currentStyle.inputView}>
          <View>
            <Text style={currentStyle.labelText}>Time</Text>
          </View>
          <View>
            <NumericInput
              rounded
              minValue={0}
              maxValue={12}
              value={time}
              onChange={(val) => setTime(val)}
              rightButtonBackgroundColor={"green"}
              leftButtonBackgroundColor={"green"}
            ></NumericInput>
          </View>
        </View>
      </>
    );
  };

  // ota varulta pois lopuksi
  console.log(gender);

  return (
    <SafeAreaView style={currentStyle.container}>
      <ScrollView style={currentStyle.scrollView}>
        <View style={currentStyle.headerArea}>
          <View style={currentStyle.switchArea}>
            <Switch></Switch>
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
                value={weight}
                onChangeText={(val) => setWeight(val)}
                keyboardType="numeric"
                // tarviiko tota donea?
                returnKeyType="done"
                clearButtonMode="always"
                clearTextOnFocus={true}
                maxLength={3}
              />
            </View>
          </View>
          <BottleInput />
          <TimeInput />
          <SexRadioButton />
        </View>

        <View style={currentStyle.buttonArea}>
          {/* ehdollisuus tyylille */}

          <Text style={resultStyle}>{level}</Text>
          <CalculateButton />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

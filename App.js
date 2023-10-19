import { useState, useMemo } from "react";
import { DarkTheme, LightTheme } from "./styles/Styles";
import NumericInput from "react-native-numeric-input";
import RadioGroup from "react-native-radio-buttons-group";

import {
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  View,
  Switch,
  TouchableOpacity,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

//import RadioButtonIOS from "react-native-paper/lib/typescript/components/RadioButton/RadioButtonIOS";

export default function App() {
  const [weight, setWeight] = useState("88");
  const [bottles, setBottles] = useState(1);
  const [gender, setGender] = useState("male");
  const [time, setTime] = useState(1);
  const [level, setLevel] = useState(0);

  const [style, setStyle] = useState(true);
  let currentStyle = style ? DarkTheme : LightTheme;

  const CalculateButton = () => {
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
          id: "male", // acts as primary key, should be unique and non-empty string
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

  const WeightInput = () => {
    //const [weight, setWeight] = useState("88");
    return <></>;
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

  function calculate() {
    let validated = weight < 0 ? "0" : weight;
    // miten infinityn saa pois. lol

    // tarkista tarviiko olla noita Number
    let litres = Number(bottles) * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = Number(validated) / 10;
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
    <SafeAreaView style={currentStyle.container}>
      {/* <ScrollView style={currentStyle.scrollView}> */}

      <View style={currentStyle.headerArea}>
        <View style={currentStyle.switchArea}>
          <Switch title={"vitunpaskaa"}></Switch>
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
              onChangeText={(text) => setWeight(text)}
              keyboardType="numeric"
              returnKeyType="done"
              value={weight}
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
        <Text style={currentStyle.result}>{level}</Text>
        <CalculateButton />
      </View>

      {/* </ScrollView> */}
    </SafeAreaView>
  );
}

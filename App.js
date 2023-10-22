import { useState, useMemo } from "react";
import { AquaTheme, PinkTheme } from "./styles/Styles";
import { useFonts } from "expo-font";
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
  const [style, setStyle] = useState(false);

  const [loaded] = useFonts({
    LugrasimoRegular: require("./assets/fonts/Lugrasimo-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  let currentStyle = style ? PinkTheme : AquaTheme;

  // Tuloksen ehdollisuus alkoholitason mukaan
  let resultStyle = "";

  if (level > 0.2) {
    resultStyle = currentStyle.resultNo;
  } else if (level > 0) {
    resultStyle = currentStyle.resultCareful;
  } else {
    resultStyle = currentStyle.resultOk;
  }

  const ToggleTheme = () => {
    return (
      <View style={currentStyle.switchArea}>
        <Switch
          value={style}
          onValueChange={() => setStyle(!style)}
          trackColor={{
            false: currentStyle.trackColor,
            true: currentStyle.trackColor,
          }}
          thumbColor={
            style ? currentStyle.thumbcolorPink : currentStyle.thumbcolorAqua
          }
        ></Switch>
      </View>
    );
  };

  const BottleInput = () => {
    return (
      <>
        <View style={currentStyle.inputView}>
          <View>
            <Text style={currentStyle.labelText}>Bottles</Text>
          </View>
          <View style={currentStyle.numericInput}>
            <NumericInput
              rounded
              minValue={0}
              maxValue={12}
              value={bottles}
              onChange={(val) => setBottles(val)}
              borderColor={currentStyle.borderColor}
              rightButtonBackgroundColor={currentStyle.numericColor}
              leftButtonBackgroundColor={currentStyle.numericColor}
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
          <View style={currentStyle.numericInput}>
            <NumericInput
              rounded
              minValue={0}
              maxValue={24}
              value={time}
              onChange={(val) => setTime(val)}
              borderColor={currentStyle.borderColor}
              rightButtonBackgroundColor={currentStyle.numericColor}
              leftButtonBackgroundColor={currentStyle.numericColor}
            ></NumericInput>
          </View>
        </View>
      </>
    );
  };

  const SexRadioButton = () => {
    const radioButtons = useMemo(
      () => [
        {
          id: "male",
          label: "Male",
          color: currentStyle.numericColor,
          size: 40,
          borderColor: "#000000",
        },
        {
          id: "female",
          label: "Female",
          color: currentStyle.numericColor,
          size: 40,
          borderColor: "#000000",
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

  const CalculateButton = () => {
    function calculate() {
      // Validaatio painokentälle
      if (weight === "") {
        alert("Please insert weight");
        return;
      }

      let litres = Number(bottles) * 0.33;
      let grams = litres * 8 * 4.5;
      let burning = Number(weight) / 10;
      let gramsLeft = grams - burning * Number(time);
      let result = 0;

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

  return (
    <SafeAreaView style={currentStyle.container}>
      <ScrollView style={currentStyle.scrollView}>
        <View style={currentStyle.headerArea}>
          <ToggleTheme />
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
          <View style={currentStyle.resultArea}>
            <Text style={resultStyle}>{level}</Text>
          </View>
          <CalculateButton />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

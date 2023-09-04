import { useMemo, useState } from "react";
import { StatusBar } from "expo-status-bar";
import Styles from "./styles/Styles";
import RadioGroup from "react-native-radio-buttons-group";

import {
  ScrollView,
  Text,
  TextInput,
  View,
  Switch,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [weight, setWeight] = useState(80);
  const [bottles, setBottles] = useState(1);
  const [gender, setGender] = useState("male");
  const [time, setTime] = useState(1);

  const [hidden, setHidden] = useState(false);

  // alkoholipitoisuus veressä
  const [level, setLevel] = useState("");

  // voi se tulos olla tavallinen let
  // Numberin voi laittaa vasta lopussa
  // tee oma nappi

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

  function calculate(e) {
    e.preventDefault();
    // tarkista tarviiko olla noita Number
    let litres = Number(bottles) * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = Number(weight) / 10;
    let gramsLeft = grams - burning * Number(time);

    // kato onko tää hyvä
    if (gender === "male") {
      result = gramsLeft / (weight * 0.7);
    } else {
      result = gramsLeft / (weight * 0.6);
    }

    if (result < 0) {
      result = 0; // setResult(0) tää olis varmaan ollut se tilamuuttujaversio eli siitä tuli miinusta
    }

    setLevel(result);
  }

  const CalculateButton = () => {
    return (
      <TouchableOpacity style={Styles.button} onPress={calculate}>
        <Text>Laske tästä</Text>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={Styles.scrollView}>
      <StatusBar hidden={hidden} />
      <StatusBar style="auto" />
      <View style={Styles.toggle}>
        <Switch title="Toggle StatusBar"></Switch>
      </View>
      <View style={Styles.container}>
        <Text>Alcometer</Text>

        <View>
          <Text>Set weight</Text>
          <TextInput
            style={Styles.input}
            onChangeText={setWeight}
            value={weight}
            keyboardType="number-pad"
          />
        </View>

        <View>
          <Text>Bottles</Text>
          <TextInput
            style={Styles.input}
            onChangeText={setBottles}
            value={bottles}
            keyboardType="number-pad"
          />
        </View>

        <View>
          <Text>Time</Text>
          <TextInput
            style={Styles.input}
            onChangeText={setTime}
            value={time}
            keyboardType="number-pad"
          />
        </View>

        <View style={Styles.radio}>
          {/* <RadioGroup
            radioButtons={radioButtons}
            onPress={setSelectedId}
            selectedId={selectedId}
            layout="row"
          /> */}
        </View>
        <View style={Styles.calculate}>
          <CalculateButton />
          <Text>Tulos tähän</Text>
        </View>
      </View>
    </ScrollView>
  );
}

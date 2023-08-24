import { useMemo, useState } from "react";
import { StatusBar } from "expo-status-bar";
import RadioGroup from "react-native-radio-buttons-group";

import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Alert,
  TouchableHighlight,
  Switch,
  ActionSheetIOS,
} from "react-native";

export default function App() {
  const [weight, setWeight] = useState(80);
  const [bottles, setBottles] = useState(0);
  const [gender, setGender] = useState("male");
  const [time, setTime] = useState(1);

  const [hidden, setHidden] = useState(false);

  // alkoholipitoisuus veressä
  const [level, setLevel] = useState(0);

  function paina() {
    Alert.alert("giiiii");
  }

  const radioButtons = useMemo(
    () => [
      {
        id: "1", // acts as primary key, should be unique and non-empty string
        label: "Mies",
        value: "mies",
      },
      {
        id: "2",
        label: "Nainen",
        value: "nainen",
      },
    ],
    []
  );

  const [selectedId, setSelectedId] = useState();
  function calculate() {
    // e.preventDefault();
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10;
    let gramsLeft = grams - burning * time;

    if (gender === "male") {
      setLevel(gramsLeft / (weight * 0.7));
    } else {
      setLevel(gramsLeft / (weight * 0.6));
    }

    if (level < 0) {
      setLevel(0);
    }
  }

  const changeStatusBarVisibility = () => setHidden(!hidden);

  return (
    <ScrollView style={styles.scrollView}>
      <StatusBar hidden={hidden} />
      <View style={styles.toggle}>
        <Switch
          title="Toggle StatusBar"
          onChange={changeStatusBarVisibility}
        ></Switch>
      </View>
      <View style={styles.container}>
        <Text>Alcometer</Text>

        <View>
          <Text>Set weight</Text>
          <TextInput
            style={styles.input}
            onChangeText={() => setWeight}
            value={weight}
            keyboardType="numeric"
          />
        </View>

        <View>
          <Text>Bottles</Text>
        </View>

        <View>
          <Text>Time</Text>
        </View>

        <View style={styles.radio}>
          <RadioGroup
            radioButtons={radioButtons}
            onPress={setSelectedId}
            selectedId={selectedId}
            layout="row"
          />
        </View>
        <View style={styles.calculate}>
          <Button title="Calculate" onPress={calculate} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  toggle: {
    marginTop: 40,
    justifyContent: "left",
    alignItems: "left",
  },
  scrollView: {
    backgroundColor: "pink",
    // marginVertical: 30,
  },
  radio: {
    marginTop: 40,
    backgroundColor: "green",
    justifyContent: "left",
  },
  input: {
    backgroundColor: "purple",
  },
  calculate: {
    marginTop: 40,
  },
});

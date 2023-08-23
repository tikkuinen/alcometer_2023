import { useState } from "react";
import { StatusBar } from "expo-status-bar";

import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Alert,
  TouchableHighlight,
} from "react-native";

export default function App() {
  const [weight, setWeight] = useState(80);
  const [bottles, setBottles] = useState(0);
  const [gender, setGender] = useState("male");
  const [time, setTime] = useState(1);

  // alkoholipitoisuus veressä
  const [level, setLevel] = useState(0);

  function paina() {
    Alert.alert("giiiii");
  }

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

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.container}>
          <Text>Alcometer</Text>
        </View>

        <View style={styles.container}>
          <StatusBar style="auto" />
          <TextInput></TextInput>
          <Button title="Hii" onPress={paina} />
          <TouchableHighlight>
            <Text>kkkkk</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.container}>
          <Button title="Hii" onPress={paina} />
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
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: "pink",
    marginHorizontal: 20,
  },
});

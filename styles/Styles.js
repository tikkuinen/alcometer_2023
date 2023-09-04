import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    margin: 10,
    //backgroundColor: "#fff",
    //alignItems: "center",
    //justifyContent: "center",
    //marginTop: 40,
  },
  textInput: {
    padding: 5,
    borderWidth: 1,
    marginBottom: 10,
  },
  button: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    width: 200,
    alignItems: "center",
    backgroundColor: "green",
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
  },
  result: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
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
    padding: 5,
    borderWidth: 1,
    marginBottom: 10,
  },
  calculate: {
    marginTop: 40,
  },
});

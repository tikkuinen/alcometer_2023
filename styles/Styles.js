import { StyleSheet } from "react-native";

const DarkTheme = StyleSheet.create({
  container: {
    // koko paska
    backgroundColor: "green",
    flex: 1,
  },
  headerArea: {
    //flex: 1,
    height: 150,
    backgroundColor: "blue",
  },
  switchArea: {
    //flex: 1,
    paddingLeft: 10,
    paddingTop: 10,
    backgroundColor: "#d91ccf",
  },
  header: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 32,
    // fontti
  },

  inputArea: {
    flex: 2,
    // alignItems: "flex-end",
    // justifyContent: "space-between",
    backgroundColor: "#23ddea",
  },
  inputView: {
    backgroundColor: "#d91ccf",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    width: 110,
    height: 44,
    fontSize: 24,
    textAlign: "center",
    backgroundColor: "white",
  },
  labelText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  radioView: {
    // flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20,
  },
  buttonArea: {
    height: 150,
    //flex: 1,
    backgroundColor: "#c8fb1e",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  button: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#3B5061",
    padding: 10,
    //marginBottom: 100,
    width: 200,
    height: 50,
    alignItems: "center",
    backgroundColor: "#3678AD",
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  resultOk: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: "lightgreen",
    paddingBottom: 10,
  },
  resultCareful: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: "yellow",
    paddingBottom: 10,
  },
  resultNo: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: "red",
    paddingBottom: 10,
  },
});

const LightTheme = StyleSheet.create({
  scrollView: {
    ...DarkTheme.scrollView,
    backgroundColor: "#b314a6",
  },
});

export { DarkTheme, LightTheme };

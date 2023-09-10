import { StyleSheet } from "react-native";

const DarkTheme = StyleSheet.create({
  container: {
    // koko paska
    backgroundColor: "green",
    flex: 1,
  },
  headerArea: {
    flex: 1,
    backgroundColor: "blue",
  },
  switchArea: {
    flex: 1,
    paddingLeft: 10,
    paddingTop: 10,
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
    backgroundColor: "#23ddea",
    flex: 3,
  },
  inputView: {
    backgroundColor: "#d91ccf",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 40,
  },
  input: {
    borderWidth: 1,
    width: 100,
  },
  labelText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonArea: {
    flex: 2,
    backgroundColor: "#c8fb1e",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#3B5061",
    padding: 10,
    marginBottom: 100,
    width: 200,
    alignItems: "center",
    backgroundColor: "#3678AD",
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  result: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
});

const LightTheme = StyleSheet.create({
  scrollView: {
    ...DarkTheme.scrollView,
    backgroundColor: "#b314a6",
  },
});

export { DarkTheme, LightTheme };

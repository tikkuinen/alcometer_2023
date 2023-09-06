import { StyleSheet } from "react-native";

const DarkTheme = StyleSheet.create({
  scrollView: {
    backgroundColor: "#8CBDE6",
  },
  toggle: {
    // switch
    marginTop: 40,
    justifyContent: "left",
    alignItems: "left",
    marginLeft: 20,
  },
  container: {
    // switchin alapuolinen osa kokonaisuudessaan
    flex: 1,
    alignItems: "left",
    justifyContent: "center",
    marginLeft: 50,

    marginTop: 50,
  },
  button: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#3B5061",
    marginTop: 30,
    padding: 10,
    width: 200,
    alignItems: "center",
    backgroundColor: "#3678AD",
  },
  buttonText: {
    fontWeight: "bold",
    color: "black",
    fontSize: 25,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 40,
  },
  result: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    margin: 50,
    borderWidth: 2,
  },

  input: {
    padding: 5,
    borderWidth: 1,
    marginBottom: 10,
  },
});

const LightTheme = StyleSheet.create({
  scrollView: {
    ...DarkTheme.scrollView,
    backgroundColor: "#b314a6",
  },
});

export { DarkTheme, LightTheme };

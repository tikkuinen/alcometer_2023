import { StyleSheet } from "react-native";

const AquaTheme = StyleSheet.create({
  container: {
    backgroundColor: "#F2EBD5",
    flex: 1,
  },
  headerArea: {
    //flex: 1,
    height: 125,
    //backgroundColor: "blue",
  },
  switchArea: {
    //flex: 1,
    paddingLeft: 10,
    paddingTop: 10,
    //backgroundColor: "#d91ccf",
  },
  header: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontFamily: "LugrasimoRegular",
    fontWeight: "bold",
    fontSize: 32,
  },

  inputArea: {
    flex: 2,
    // alignItems: "flex-end",
    // justifyContent: "space-between",
    //backgroundColor: "#23ddea",
  },
  inputView: {
    //backgroundColor: "#d91ccf",
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
    borderColor: "#037F8C",
  },
  numericInput: {
    backgroundColor: "white",
    borderRadius: 15,
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
    //backgroundColor: "#c8fb1e",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  button: {
    borderWidth: 2,
    borderRadius: 15,
    borderColor: "#037F8C",
    padding: 10,
    marginTop: 30,
    width: 200,
    height: 50,
    alignItems: "center",
    backgroundColor: "#038C8C",
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  resultArea: {
    backgroundColor: "white",
    borderRadius: 15,
    width: 150,
  },
  resultOk: {
    marginTop: 10,
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: "lightgreen",
    paddingBottom: 10,
  },
  resultCareful: {
    marginTop: 10,
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: "orange",
    paddingBottom: 10,
  },
  resultNo: {
    marginTop: 10,
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: "red",
    paddingBottom: 10,
  },
  numericColor: "#038C8C",
  borderColor: "black",
  trackColor: "#767577",
  thumbcolorLight: "#b314a6",
  thumbcolorDark: "#038C8C",
});

const PinkTheme = StyleSheet.create({
  ...AquaTheme,
  container: {
    ...AquaTheme.container,
    backgroundColor: "#8FB6D9",
  },
  button: {
    ...AquaTheme.button,
    backgroundColor: "#b314a6",
  },

  numericColor: "#b314a6",
});

export { AquaTheme, PinkTheme };

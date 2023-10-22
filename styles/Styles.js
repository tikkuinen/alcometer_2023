import { StyleSheet } from "react-native";

const AquaTheme = StyleSheet.create({
  container: {
    backgroundColor: "#F2EBD5",
    flex: 1,
  },
  headerArea: {
    height: 125,
  },
  switchArea: {
    paddingLeft: 10,
    paddingTop: 10,
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
  },
  inputView: {
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
    backgroundColor: "#FFFFFF",
    borderColor: "#000000",
  },
  numericInput: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
  },
  labelText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  radioView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20,
  },
  buttonArea: {
    height: 150,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  button: {
    borderWidth: 2,
    borderRadius: 15,
    borderColor: "#000000",
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
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#000000",
    width: 150,
  },
  resultOk: {
    marginTop: 10,
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: "#008c10ff",
    paddingBottom: 10,
  },
  resultCareful: {
    marginTop: 10,
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fd8f00",
    paddingBottom: 10,
  },
  resultNo: {
    marginTop: 10,
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: "#ff0000",
    paddingBottom: 10,
  },
  numericColor: "#038C8C",
  borderColor: "#000000",
  trackColor: "#767577",
  thumbcolorPink: "#DA6CF5",
  thumbcolorAqua: "#038C8C",
});

const PinkTheme = StyleSheet.create({
  ...AquaTheme,
  container: {
    ...AquaTheme.container,
    backgroundColor: "#D0C8FF",
  },
  button: {
    ...AquaTheme.button,
    backgroundColor: "#DA6CF5",
  },

  numericColor: "#DA6CF5",
});

export { AquaTheme, PinkTheme };

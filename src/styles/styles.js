import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  body: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },

  containerHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    height: 75,
  },
  logo: {
    flexDirection: "row",
    justifyContent: "center",
    width: 150,
  },
  imagelogo: {
    width: 150,
    height: 75,
  },
  Buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 10,
    gap: 20,
  },
  secondaryContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },

  thirdContainer: {
    flex: 1,
    width: "100%",
    marginTop: 40,
    textAlign: "center",
    alignItems: "center",
  },

  boxcentral: {
    opacity: 0.8,
    backgroundColor: 'black',
    borderColor: "black",
    borderWidth: 2,
    color: "white",
    padding: 10,
  },

  boxtouch: {
    alignItems: 'center',
    gap: 10,
  },

  containerRodape: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    height: 75,
  },
});

export default styles;

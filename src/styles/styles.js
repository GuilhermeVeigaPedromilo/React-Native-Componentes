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
    gap: 20,
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

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default styles;

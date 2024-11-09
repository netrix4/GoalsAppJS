import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View, Modal, SafeAreaView } from "react-native";

const UserInput = (props) => {
  const [meta, setMeta] = useState("");

  const handleInputText = (metaUsuario) => {
    setMeta(metaUsuario);
  };
  const clearInputField = () => {
    setMeta("");
  };
  function funcClearList() {
    props.handleClearList();
  }
  function addMetaOnComponent() {
    props.handleListMetas(meta);
    clearInputField();
  }
  const dismissModal =()=>{
    props.handleAddButton()
  }

  return (
    <Modal animationType='slide' visible={props.visible} >
      <SafeAreaView >
        <View style={styles.fieldContainer}>
          <View style={styles.inputsContainer}>
            <TextInput
              styles={styles.inputs}
              placeholder="Agrega una meta"
              onChangeText={handleInputText}
              value={meta}
            />
          </View>
          
          <Button title="Add" onPress={addMetaOnComponent}></Button>
          <View style={styles.clearButtonContainer}>
            <Button
              style={styles.clearButton}
              title="Borrar Lista"
              onPress={funcClearList}
            />
          </View>
          <View style={styles.clearButtonContainer}>
            <Button
              style={styles.clearButton}
              title="Dismiss"
              onPress={dismissModal}
            />
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    padding: 15,
  },

  inputsContainer:{
    flex: 1,
    backgroundColor: "#e3e3e3",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    // width: 100,
    height: 25,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    
  },
  fieldContainer: {
    // backgroundColor: "#3b5693",
    flexDirection: "row",
    backgroundColor: "#e3e3e3",

    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    alignItems: "center",
    marginHorizontal: 15,
    justifyContent: "space-between",
  },
  inputs: {
    backgroundColor: "#fff",
    fontSize: 25,
    width: 50,
    color: "green",
  },
  clearButtonContainer: {
    display: "flex",
    width: 110,
    justifyContent: "center",
    alignItems: "center",
  },
  headerLista: {
    fontWeight: "bold",
    fontSize: 25,
  },
  itemLista: {
    fontWeight: "light",
    fontSize: 15,
  },
  listContainer: {
    padding: 15,
    backgroundColor: "#e3e3e3",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
});

export default UserInput;

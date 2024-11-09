// import { v4 as uuidv4 } from "uuid";

import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  View,
  Text,
  Modal,
  SafeAreaView,
  TextInput,
} from "react-native";

import UserInput from "./components/UserInput";
import GoalList from "./components/GoalList";

export default function App() {
  const [listaMetas, setListaMetas] = useState([]);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [editingGoal, setEditingGoal] = useState({});
  let editarMeta=''

  const generarUUDI = () => {
    let uudi = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g);
    (c) =>
      c ^
      crypto
        .getRandomValues(new Uint8Array(1)[0] & ([15] >> (c / 4)))
        .toString(16);
    return uudi;
  };

  const handleListMetas = (meta) => {
    if (meta != "") {
      setListaMetas([
        ...listaMetas,
        { texto: meta, id: Math.random().toString() },
      ]);
    }
    setIsVisibleModal(!isVisibleModal);
  };
  const handleClearList = () => {
    setListaMetas([]);
  };

  const onRemove = (id) => {
    console.log("Eliminar", id);
    setListaMetas(
      // listaMetas.filter((meta) => meta != id)
      listaMetas.filter((meta) => meta.id != id)
    );
    console.log(id, "elimininado");
  };

  const handleEditGoal = (id) => {
    console.log("object1");
    setIsEditModalVisible(true);
    const metaEncontrada = listaMetas.find((meta) => meta.id === id);
    // editarMeta = metaEncontrada.texto
    const indiceMetaEncontrada = listaMetas.indexOf(metaEncontrada);
    console.log(metaEncontrada, indiceMetaEncontrada);
    setEditingGoal(metaEncontrada);
  };

  const handleChangeEditText = (metaEditada2) => {
    setEditingGoal({...editingGoal, texto: metaEditada2})
  }
  const onAcceptEdit = () => {

    const arrActualizado = listaMetas.map(obj => {
      if (obj.id === editingGoal.id) {
        return { ...obj, texto: editingGoal.texto};
      }
      return obj;
    });

    setListaMetas(arrActualizado)
    setIsEditModalVisible(false);

  };

  const onHideEditModal = () => {
    setIsEditModalVisible(false);
  };

  const handleAddButton = () => {
    setIsVisibleModal(isVisibleModal ? false : true);
  };

  return (
    <View style={styles.container}>
      <UserInput
        visible={isVisibleModal}
        handleListMetas={handleListMetas}
        handleClearList={handleClearList}
        handleAddButton={handleAddButton}
      />

      <View style={styles.showModalContainer}>
        <Button title="Agregar objetivo" onPress={handleAddButton} />
      </View>

      <GoalList
        listaMetas={listaMetas}
        onRemove={onRemove}
        handleEditGoal={handleEditGoal}
      />
      <Modal animationType="slide" visible={isEditModalVisible}>
        <SafeAreaView>
          {/* <TextInput value={editingGoal.texto} /> */}
          <TextInput value={editingGoal.texto} onChangeText={handleChangeEditText} />
          <Button title="Cancelar" onPress={onHideEditModal} />
          <Button title="Aceptar" onPress={onAcceptEdit} />
        </SafeAreaView>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6f8bc9",
    paddingTop: 50,
    padding: 15,
  },
  showModalContainer: {
    backgroundColor: "#FFF",
  },
  inputContainer: {
    backgroundColor: "#000000",
  },
  fieldContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
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

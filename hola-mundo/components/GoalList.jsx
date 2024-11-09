import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Goal from "./Goal";

const GoalList = (props) => {
  return (
    <View style={styles.listContainer}>
      <Text style={styles.headerLista}>Lista de metas</Text>

      <FlatList
        alwaysBounceVertical={false}
        data={props.listaMetas}
        renderItem={(itemData) => {
          //codigo
          console.log(itemData);
          return (
            <Goal
              style={styles.itemLista}
              id={itemData.item.id}
              content={itemData.item.texto}
              handleEditGoal={props.handleEditGoal}
              onRemove={props.onRemove}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6f8bc9",
    paddingTop: 50,
    padding: 15,
  },
  inputContainer: {
    backgroundColor: "#000000",
  },
  fieldContainer: {
    // backgroundColor: "#3b5693",
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

export default GoalList;

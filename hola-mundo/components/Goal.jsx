import React from "react";
import { StyleSheet, Button, Pressable, Text, View } from "react-native";

const Goal = (props) => {
  const onEditGoalHandler = () =>{
    console.log('object');
    props.handleEditGoal(props.id)
  }
  return (
    <Pressable onPress={props.onRemove.bind(this, props.id)}>
      <View styles={styles.itemContainer}>
        <Text>{props.content}</Text>
        {/* <Button title="Editar" onPress={onEditGoalHandler}/> */}
        <Button title="Editar" onPress={props.handleEditGoal.bind(this, props.id)}/>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#ff0000",
  },
});

export default Goal;

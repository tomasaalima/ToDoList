import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useContext, useState } from "react";

import { styles } from "../screens/style";
import { Task } from "./Task";
import { HomeContext } from "../contexts/HomeContext";

export function NewTask(props) {
  const [ fieldValue, setFieldValue ] = useState();
  const { list, setList } = useContext(HomeContext);

  const handleAddition = () => {
    setList([...list, fieldValue]);
    setFieldValue("");
  }

  return (
    <View 
      style={styles.task}
    >
        <TouchableOpacity 
          style={styles.buttonAdd} 
          onPress={handleAddition}>
            <Text 
              style={styles.addButton} 
            >
              +
            </Text>
        </TouchableOpacity>

        <TextInput
            style={styles.input}
            value={fieldValue}
            placeholder="Nova tarefa..."
            placeholderTextColor="#6B6B6B"
            onChangeText={setFieldValue}
        />

    </View>
  );
}
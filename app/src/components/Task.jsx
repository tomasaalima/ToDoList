import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { CheckBox } from 'react-native-elements';

import { styles } from "../screens/style";
import { HomeContext } from "../contexts/HomeContext";
import Icon from "react-native-vector-icons/FontAwesome";

export function Task(props) {
  const [isChecked, setIsChecked] = useState('');
  const { content } = props;

  const { doned, setDoned, setList } = useContext(HomeContext);

  useEffect(() => {
    if (isChecked !== '') {
      if (isChecked === true) {
        setDoned(doned + 1);
      } else if (doned > 0) {
        setDoned(doned - 1);
      }
    }
  }, [isChecked]);

  const handleCheckBox = () => {
    setIsChecked(!isChecked);
  };

  const handleRemove = () => {
    setList((prevList) => prevList.filter((item) => item !== content));
    if (isChecked === true) {
      setDoned(doned - 1);
    }
  };
  
  
  return (
    <View style={styles.task}>
      <CheckBox
          checked={isChecked}
          onPress={handleCheckBox}
          size={10}
      />
      <Text
        style={styles.content}
      >
        {content}
      </Text>
      <TouchableOpacity 
        style={styles.trash}
        onPress={handleRemove}
      >
        <Icon name="trash" size={24} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
}
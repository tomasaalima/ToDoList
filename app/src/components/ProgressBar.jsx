import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useContext, useState } from "react";

import { styles } from "../screens/style";
import { HomeContext } from "../contexts/HomeContext";

export function ProgressBar(props) {  
  const { doned, list } = useContext(HomeContext);

  return (
    <View style={styles.progress}>
      <View style={{flex: doned, backgroundColor: 'green' }}>
      </View>
      <View style={{flex: list.length - doned, backgroundColor: 'red' }}>
      </View>

    </View>
  );
}
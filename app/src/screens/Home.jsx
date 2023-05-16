import { View, FlatList, Text } from "react-native";
import React, { useContext, useState } from "react";

import { styles } from "./style";

import { NewTask } from "../components/NewTask";
import { ProgressBar } from "../components/ProgressBar";
import { HomeContext } from "../contexts/HomeContext";

export function Home() {
  const { list } = useContext(HomeContext);

  return (
    <View style={styles.body}>
      <ProgressBar />
      <FlatList
        style={styles.list}
        data={list}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item}
        renderItem={({ item }) => item}
        ListEmptyComponent={() => (
            <Text style={styles.listEmptyText}>
                Nenhuma tarefa
            </Text>
        )}
      />
      <NewTask/>
    </View>
  );
}
import { View, FlatList, Text } from "react-native";
import React, { useContext } from "react";

import { styles } from "./style";

import { NewTask } from "../components/NewTask";
import { ProgressBar } from "../components/ProgressBar";
import { HomeContext } from "../contexts/HomeContext";
import { Task } from "../components/Task";

export function Home() {
  const { list } = useContext(HomeContext);

  return (
    <View style={styles.body}>
      <ProgressBar />
      <FlatList
        style={styles.list}
        data={list}
        key={(item) => item}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Task content={item}></Task>}
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
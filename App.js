import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>We're gonna make a counter</Text>
      <View style={styles.counterContainer}>
        <TouchableOpacity
          style={styles.wrapper}
          onPress={() => setCount(count - 1)}
        >
          <Text style={styles.btn}>-</Text>
        </TouchableOpacity>

        <View style={styles.wrapper}>
          <Text style={styles.number}>{count}</Text>
        </View>

        <TouchableOpacity
          style={styles.wrapper}
          onPress={() => setCount(count + 1)}
        >
          <Text style={styles.btn}>+</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => setCount(0)}>
          <Text style={styles.reset}>Reset</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F9DF74",
  },
  header: {
    fontSize: 25,
    color: "#61210F",
  },
  counterContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 20,
  },
  wrapper: {
    flex: 1,
    alignItems: "center",
  },
  btn: {
    fontSize: 40,
    color: "#61210F",
  },
  number: {
    fontSize: 34,
    color: "#61210F",
  },

  reset: {
    fontSize: 20,
    color: "#61210F",
  },
});

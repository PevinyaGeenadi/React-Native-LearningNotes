import { View, Text, Button, FlatList, StyleSheet } from "react-native";
import React from "react";
import { router } from "expo-router";

const DATA = [
  { id: 1, title: "Item 1" },
  { id: 2, title: "Item 2" },
  { id: 3, title: "Item 3" },
];

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Profile</Text>
      <Button
        onPress={() => router.back()}
        title="Go Back"
        color="#B41584"
        accessibilityLabel="Go back to the previous screen"
        
      />
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Text style={styles.itemText}>{item.title}</Text>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 50,
    marginTop: 50,
    marginLeft: 20,
  },
  itemText: {
    height: 50,
    backgroundColor: 'red',
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 10,
    color: 'white',
  },
});

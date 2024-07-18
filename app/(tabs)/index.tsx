import { View ,Text , StyleSheet, TextInput ,Image,Button } from "react-native";
import React from "react";
import { router } from "expo-router";

export default function Index() {
  return (
    <View>
      <Text style={styles.nametext}>index</Text>
      <TextInput style={styles.input} placeholder="Enter your name" />
      <Button 
            onPress={()=>router.push("profile")}
            title="go to profile"
            color= "#B41584"
            accessibilityLabel="Learn more" 
            />
      <Image style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  nametext: {
    fontSize: 30,
    color: 'red',
    marginTop: 50,
    marginLeft: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  
  tinyLogo: {
    width: 50,
    height: 50,
  },
  button: {
    margin: 10,
  }
})
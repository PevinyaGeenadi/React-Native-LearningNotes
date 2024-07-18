import { View, Text ,Button,StyleSheet} from 'react-native'
import React from 'react'
import {Link, router } from 'expo-router'

export default function home() {
  return (
    <View>
      <Text style={styles.nametext}>Profile</Text>
      <Button title="Go to index" onPress={() => router.back()}/>
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
  
})

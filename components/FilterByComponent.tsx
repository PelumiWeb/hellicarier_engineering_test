import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FilterByComponent = (props: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  )
}

export default FilterByComponent

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "gray",
    width: 80,
    margin:10,
  },
  text: {
    textAlign: "center",
    color: "#fff"
  }
})
import React from "react"
import { View, Text, StyleSheet } from "react-native"

const MusicPlayer = () => {
  return (
    <View>
      <Text style={styles.buttonCon}>Click Me</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonCon: {
    marginTop: 20,
    borderColor: "black",
    borderWidth: 2,
    padding: 10,
    borderRadius: 6,
    textAlign: "center",
    backgroundColor: "#24a0ed",
    color: "white",
    width: 100,
  },
})

export default MusicPlayer

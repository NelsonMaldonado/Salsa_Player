import React from "react"
import { View, Text, StyleSheet } from "react-native"

const VideoPlayer = () => {
  return (
    <View>
      <Text style={styles.videotext}>
        Hello Juan, here I will place a video :)
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  videotext: {
    marginTop: 20,
    borderColor: "black",
    borderWidth: 2,
    padding: 10,
    borderRadius: 6,
    backgroundColor: "red",
    color: "white",
  },
})

export default VideoPlayer

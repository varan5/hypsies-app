import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const StartGame = ({ navigation }) => {
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("Game")}>
          <Image
            source={require("../../assets/enjoying.gif")}
            style={styles.imageStyle}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: 140,
    width: 180,
  },
});

export default StartGame;

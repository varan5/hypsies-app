import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const StartImage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
        <Image
          source={require("../../assets/know-more.gif")}
          style={styles.imageStyle}
        />
        <Text style={styles.textStyle}>Get's Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    margin: 20,
    alignItems: 'flex-end',
  },
  imageStyle: {
    height: 150,
    width: 150,
  },
  textStyle: {
    marginLeft: 20,
    marginTop: 10,
    fontSize: 20,
  }
});

export default StartImage;

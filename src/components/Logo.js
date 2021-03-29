import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

const Logo = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('KnowMore')}>
        <Image
          source={require("../../assets/logo.jpg")}
          style={styles.imageStyle}
        />     
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: 140,
    width: 175,
  },
});

export default Logo;

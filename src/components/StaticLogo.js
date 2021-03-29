import React from "react";
import { View, StyleSheet, Image } from "react-native";

const StaticLogo = () => {
  return (
    <View>
        <Image
          source={require("../../assets/logo.jpg")}
          style={styles.imageStyle}
        />     
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: 140,
    width: 140,
  },
});

export default StaticLogo;

import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Title = ({ text }) => {
  return (
    <View>
        <Text style={styles.textStyle}>{text}              Play Game ?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    marginLeft: 30,
    marginTop: 30,
    marginBottom: -30,
    color: "#184d47",
    fontFamily: "sans-serif-condensed",
    fontWeight: "bold",
  },
});

export default Title;

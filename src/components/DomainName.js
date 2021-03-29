import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const DomainName = ({ navigation }) => {
  return (
    <View>
      <Text onPress={() => navigation.navigate('KnowMore')} style={styles.textStyle}>Hypsies</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    marginLeft: 20,
    color: "#184d47",
    fontFamily: "sans-serif-condensed",
    fontWeight: "bold",
  },
});

export default DomainName;

import React from "react";
import { Text, View, StyleSheet, Button, Image } from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

const IconClick = ({ navigation, iconName, screenName, description }) => {
  console.log(screenName);
  return (
    <View>
      <View style={styles.iconsContainer}>
        <FontAwesome5
          name={iconName}
          size={40}
          onPress={() => navigation.navigate(`${screenName}`)}
        />
        <Text>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  iconsContainer: {
    margin: 60,
    flexDirection: "column",
    justifyContent: "space-around",
  },
});

export default IconClick;

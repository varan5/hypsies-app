import React from "react";
import { Text, View, StyleSheet, Button, Image } from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const DetailContainer = ({ navigation, buttonTitle, gifSource, screenName }) => {
  return (
    <View>
      <View style={styles.paddingStyle} />
      <View style={styles.lifeWithUsView}>
        <View style={styles.buttonStyle}>
          <Button
            title={buttonTitle}
            onPress={() => navigation.navigate(`${screenName}`)}
            color="teal"
          />
        </View>
        <TouchableOpacity>
          <Image 
            source={gifSource}
            style={styles.imageStyle}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    height: 100,
    width: 200,
    marginTop: 25,
  },
  lifeWithUsView: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  
  imageStyle: {
    height: 90,
    width: 90,
  }
});

export default DetailContainer;

import React from "react";
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Image,
} from "react-native";
import IconClick from "../components/IconClick";
import Logo from "../components/Logo";
import StartImage from "../components/StartImage";

const HomeScreen = ({ navigation }) => {
  StatusBar.setHidden(true);
  return (
    <View>
      <View style={styles.gapMaker} />
      <View style={styles.logoImageContainer}>
        <Logo navigation={navigation} />
        <Image
          source={require("../../assets/enjoying.gif")}
          style={styles.imageStyle}
        />
      </View>
      <StartImage navigation={navigation} />
      <View style={styles.iconsContainer}>
        <IconClick
          style={styles.iconStyle}
          navigation={navigation}
          iconName="smile-beam"
          screenName="LifeWithHypsies"
          description="Hypsies"
        />
        <IconClick
          style={styles.iconStyle}
          navigation={navigation}
          iconName="handshake"
          screenName="LifeWithHypsies"
          description="Services"
        />
        <IconClick
          style={styles.iconStyle}
          navigation={navigation}
          iconName="clipboard"
          screenName="LifeWithHypsies"
          description="Blogs"
        />
        <IconClick
          style={styles.iconStyle}
          navigation={navigation}
          iconName="chart-line"
          screenName="LifeWithHypsies"
          description="Careers"
        />
        <IconClick
          style={styles.iconStyle}
          navigation={navigation}
          iconName="phone-volume"
          screenName="LifeWithHypsies"
          description="Let's Talk"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gapMaker: {
    marginTop: 30,
  },
  imageStyle: {
    height: 140,
    width: 180,
  },
  logoImageContainer: {
    flexDirection: "row",
  },
  iconsContainer: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  iconStyle: {
    // margin: 10,
  },
});

export default HomeScreen;

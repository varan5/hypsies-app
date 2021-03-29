import React from "react";
import { Text, View, StyleSheet, Button, Image } from "react-native";
import DetailContainer from "../../components/DetailContainer";

const DetailScreen = ({ navigation }) => {
  return (
    <View>
      <View style={styles.marginView}/>
      <DetailContainer
        buttonTitle="Life With Hypsies"
        gifSource={require('../../../assets/life-with-hypsies-gif.gif')}
        screenName="LifeWithHypsies"
        navigation={navigation}
      />
  
      <DetailContainer
        buttonTitle="Our Services"
        gifSource={require('../../../assets/our-services-gif.gif')}
        screenName="LifeWithHypsies"
        navigation={navigation}
      />
      <DetailContainer
        buttonTitle="Blogs"
        gifSource={require('../../../assets/blog-gif.gif')}
        screenName="LifeWithHypsies"
        navigation={navigation}
      />
      <DetailContainer
        buttonTitle="Careers"
        gifSource={require('../../../assets/career-gif.gif')}
        screenName="LifeWithHypsies"
        navigation={navigation}
      />
      <DetailContainer
        buttonTitle="Let's Talk"
        gifSource={require('../../../assets/contact-gif.gif')}
        screenName="LifeWithHypsies"
        navigation={navigation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  marginView: {
    marginTop: 20,
  }
});

export default DetailScreen;

import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import StaticLogo from '../../components/StaticLogo'

const KnowMoreScreen = () => {
    return (
        <View>
            <StaticLogo style={styles.logoStyle} />
            <Text style={styles.textStyle}>Hypsies is a leading firm which helps businessess to 'Dream' and make them 'Fly'</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    logoStyle: {
        height: 300,
        width: 300,
    },
    nameStyle: {
        fontSize: 35,
        color: 'teal',
    },
    textStyle: {
        fontSize: 15,
        color: 'grey',
    }
})

export default KnowMoreScreen





import React from 'react'
import { StyleSheet, Text, Image, View, ImageBackground } from 'react-native'
import AppButton from '../components/AppButton'

export default function WelcomeScreen() {
    return (
        <ImageBackground
            blurRadius={3}
            style={styles.background}
            source={require("../assets/background.jpg")}
        >
            <View style={styles.logoContainer}>
                <Image source={require("../assets/logo-red.png")} style={styles.logo} />
                <Text style={styles.tagline}>Sell What You Don't Need</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <AppButton title="login" onPress={() => console.log('tapped')} />
                <AppButton title="Register" color='secondary' onPress={() => console.log('tapped')} />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    tagline:{
        fontSize: 25,
        fontWeight: '600',
        paddingVertical: 20
    },
    buttonsContainer:{
        padding: 20,
        width: '100%',
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center'
    }
})

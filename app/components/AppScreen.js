import React from 'react'
import { StyleSheet, SafeAreaView, Platform, StatusBar, View } from 'react-native'

export default function AppScreen({children, style}) {
    return (
        <SafeAreaView style={[styles.screen, style]}>
            <View style={[style, styles.view]}>{children}</View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen:{
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        flex: 1,
    },
    view:{
        flex: 1,
    }
})

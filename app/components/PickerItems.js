import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import AppText from './AppText'

export default function PickerItems({ onPress, item }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <AppText style={styles.text}>{item.label}</AppText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        padding: 20,
    },
})

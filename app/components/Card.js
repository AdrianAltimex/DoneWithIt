import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

import colors from '../config/colors'
import AppText from '../components/AppText'

export default function Card({ title, subTitle, image }) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title} numberOfLines={1} >{title}</AppText>
                <AppText style={styles.subTitle} numberOfLines={2} >{subTitle}</AppText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 200,
    },
    detailsContainer:{
        padding: 20,
    },
    title:{
        marginBottom: 20,
    },  
    subTitle:{
        color: colors.secondary,
        fontWeight: 'bold',
    },  
})

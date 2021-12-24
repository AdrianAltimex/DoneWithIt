import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'

import AppScreen from '../components/AppScreen'
import Icon from '../components/Icon'
import ListItem from '../components/ListItem'
import ListItemSeperator from '../components/ListItemSeperator'
import colors from '../config/colors'

const menuItems = [
    {
        title: 'My Listings',
        icon: {
            name: 'format-list-bulleted',
            backgroundColor: colors.primary,
        }
    },
    {
        title: 'My Messages',
        icon: {
            name: 'email',
            backgroundColor: colors.secondary,
        }
    }
]
export default function AccountScreen() {
    return (
        <AppScreen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title='mosh damedani'
                    subTitle='programmingwithmosh@gmail.com'
                    image={require('../assets/mosh.jpg')} />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={item => item.title}
                    ItemSeparatorComponent={ListItemSeperator}
                    renderItem={({ item }) => (
                        <ListItem
                            title={item.title}
                            IconComponent={
                                <Icon
                                    name={item.icon.name}
                                    backgroundColor={item.icon.backgroundColor} />
                            } />
                    )} />
            </View>
            <ListItem
                title='Log Out'
                IconComponent={
                    <Icon name='logout' backgroundColor='#ffe66d' />
                } />
        </AppScreen>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    screen: {
        backgroundColor: colors.light
    }
})

import React, {useState} from 'react'
import { StyleSheet, Text, View, FlatList} from 'react-native'
import ListItem from '../components/ListItem'
import AppScreen from '../components/AppScreen'
import ListItemSeperator from '../components/ListItemSeperator'
import ListItemDeleteAction from '../components/ListItemDeleteAction'

const initialMessages = [
    {
        id: 1,
        title: 'T1',
        description: 'stuff',
        image: require('../assets/mosh.jpg')
    },
    {
        id: 2,
        title: 'T2',
        description: 'more stuff',
        image: require('../assets/mosh.jpg')
    },
]

export default function MessageScreen() {
    const [messages,setMessages] = useState(initialMessages)
    const [refreshing,setRefeshing] = useState(false)

    const handleDelete = (message) => {
        setMessages(messages.filter(m => m.id != message.id));
    }

    return (
        <AppScreen>
            <FlatList
            data={messages}
            keyExtractor={(message) => message.id.toString()}
            renderItem={({item}) =>(
                <ListItem
                    title={item.title}
                    subTitle={item.description}
                    image={item.image}
                    onPress={() => console.log('message selected', item)}
                    renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)}/>}
                />
            )}
            ItemSeparatorComponent={ListItemSeperator}
            refreshing={refreshing}
            onRefresh={()=>{
                setMessages([
                    {
                        id: 2,
                        title: 'T2',
                        description: 'more stuff',
                        image: require('../assets/mosh.jpg')
                    },
                ])
            }}
        />
        </AppScreen>
    )
}

const styles = StyleSheet.create({
    
})

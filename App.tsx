import {StatusBar} from 'expo-status-bar';
import {Dimensions, FlatList, ListRenderItem, StyleSheet, Text, View} from 'react-native';
import React from 'react';

type DataType = {
    id: number,
    title: string,
    price: number
}

const {width, height} = Dimensions.get('screen')
const WIDTH = width
const HEIGHT = height
const PADDING = 20

const titles = ['Apple', 'Android', 'Windows', 'Linux', 'Elbrus']
const prices = [1000, 200, 300, 0, 900]

const data: DataType[] = new Array(100).fill(null).map((_, index) => ({
    id: index + 1,
    title: titles[index % titles.length],
    price: prices[index % prices.length],
}))

export default function App() {
    const renderItem: ListRenderItem<DataType> = ({item}) => {
        return (
            <View style={styles.FlatlistStyle}>
                <Text>{item.title} {item.price}</Text>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                numColumns={2}
                columnWrapperStyle={{justifyContent: 'space-between'}}
            />

            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: PADDING,
        marginTop: 24,
        backgroundColor: '#cacebc',
    },
    FlatlistStyle: {
        backgroundColor: 'grey',
        marginVertical: 5,
        width: (WIDTH - PADDING * 2) / 2 - 5,
        height: ((WIDTH - PADDING * 2) / 2) / 2 - 5,
    }
});

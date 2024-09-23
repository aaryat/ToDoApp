import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

const DoneScreen = () => {
    const doneList = useSelector(state => state.doneList || []);

    // Render the done tasks
    const renderDoneItem = ({ item }) => {
        if (!item) {
        return null;
    }
        return (
        <View style={styles.doneItem}>
            <Text>{item.title}</Text>
        </View>
    );
}

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Completed Tasks</Text>
            {doneList.length === 0 ? (
                <Text style={styles.noDoneText}>No completed tasks yet!</Text>
            ) : (
                <FlatList
                    data={doneList}
                    renderItem={renderDoneItem}
                    keyExtractor={(item) => item?.id || Math.random().toString()} // math.random() if id is not extracted successfully
                />
            )}
        </View>
    );
};

export default DoneScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    doneItem: {
        padding: 15,
        backgroundColor: '#d3f8d3',
        borderRadius: 5,
        marginBottom: 10,
    },
    noDoneText: {
        fontSize: 18,
        color: 'gray',
        textAlign: 'center',
        marginTop: 20,
    },
});

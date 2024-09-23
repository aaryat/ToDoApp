import React, { useState } from 'react';
import {
    FlatList,
    StyleSheet,
    TextInput,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import { useSelector } from 'react-redux';

const SearchScreen = () => {
    const [searchQuery, setSearchQuery] = useState(''); // State to track the search query

    // Retrieve the todoList from Redux
    const todoList = useSelector(state => state.todoList || []);

    // Filter tasks based on search query
    const filteredTodoList = todoList.filter(item => 
       item.title && item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Render tasks
    const renderToDos = ({ item }) => (
        <View style={styles.todoItem}>
            <Text style={{ flex: 1 }}>{item.title}</Text>
        </View>
    );

    return (
        <View style={{ marginVertical: 16, marginHorizontal: 16 }}>
            {/* Search Input */}
            <TextInput
                style={styles.searchInput}
                placeholder="Search Tasks"
                value={searchQuery}
                onChangeText={(text) => setSearchQuery(text)} // Update search query state
            />

            {/* Search Results */}
            {filteredTodoList.length > 0 ? (
                <FlatList
                    data={filteredTodoList}
                    renderItem={renderToDos}
                    keyExtractor={(item) => item.id}
                />
            ) : (
                <Text style={styles.noResultsText}>No tasks found!</Text>
            )}
        </View>
    );
};

export default SearchScreen;

const styles = StyleSheet.create({
    searchInput: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 6,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginBottom: 20,
        fontSize: 16,
    },
    todoItem: {
        backgroundColor: '#cfecf7',
        borderRadius: 6,
        paddingVertical: 14,
        paddingHorizontal: 14,
        marginBottom: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
    noResultsText: {
        fontSize: 16,
        color: 'gray',
        textAlign: 'center',
    },
});

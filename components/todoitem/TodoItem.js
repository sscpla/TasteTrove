import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function TodoItem(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cook List</Text> 
            <View style={styles.todoContainer}>
                <TouchableOpacity style={{ flex: 2 }} onPress={() => props.onCheck(props.item.id)}>
                    <FontAwesome name={props.item.completed ? "check-square" : "square-o"} size={23} />
                </TouchableOpacity>
                <View style={{ flex: 12 }}>
                    <TextInput
                        value={props.item.title}
                        placeholder="What do you want to cook?"
                        onChangeText={(new_title) => props.onUpdate(new_title, props.item.id)}
                        style={styles.textInput}
                    />
                </View>
                <TouchableOpacity style={{ flex: 1 }} onPress={() => props.onDelete(props.item.id)}>
                    <FontAwesome name="trash" size={23} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 25,
        paddingVertical: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    todoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textInput: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        padding: 5,
    },
});

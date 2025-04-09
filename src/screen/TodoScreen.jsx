import { View, StyleSheet, FlatList, Text, Button, Alert, Keyboard, TextInput } from 'react-native';
import TextComponent from '../components/TextComponent';
import TextInputComponent from '../components/TextInputComponent';
import ButtonComponent from '../components/ButtonComponent';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo, updateTodo } from '../redux/todoSlice';
import { useState } from 'react';

const TodoScreen = () => {
    const [note, setNote] = useState('');
    const [editMode, setEditMode] = useState(null);
    const [editedText, setEditedText] = useState('');
    const dispatch = useDispatch();
    const todo = useSelector((state) => state.todo.todos);

    const handleAddTodo = () => {
        if (note.trim().length > 0) {
            dispatch(addTodo(note));
            setNote('');
            Keyboard.dismiss();
        }
    };

    const handleDelete = (id) => {
        Alert.alert(
            "Delete Todo", 
            "Are you sure you want to delete this todo?",
            [
                { text : "Cancel", style: "cancel"},
                { text : "Delete", onPress : () => dispatch(deleteTodo(id)), style:"destructive"}
            ]
        );
    };

    const handleEdit = (id, title) => {
        setEditMode(id);
        setEditedText(title);
    };

    const handleSaveEdit = (id) => {
        if(editedText.trim().length > 0) {
            dispatch(updateTodo({id, newTitle : editedText}));
            setEditMode(null);
        }
    }

    return (
        <View style={styles.container}>
            <TextComponent text='TodoScreen' textSize={30} isBold={true} />
            <TextInputComponent placeholder='Enter Todo...' value={note} onChangeText={setNote} />
            <ButtonComponent text='Add Todo' onPress={handleAddTodo} />

            <FlatList
                data={todo}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.todoContainer}>
                        {
                            editMode === item.id ? (
                                <TextInput
                                style={styles.editInput}
                                value={editedText}
                                onChangeText={setEditedText}
                                autoFocus
                            />
                            ) : (
                                <Text 
                                    style={[styles.todoItem, item.completed && styles.completedTodo]} 
                                    onPress={() => dispatch(toggleTodo(item.id))}
                                >
                                    {item.title}
                                </Text>
                            )
                        }
                        {editMode === item.id ? (
                            <Button title="Save" onPress={() => handleSaveEdit(item.id)} />
                        ) : (
                            <>
                                <Button title="Edit" onPress={() => handleEdit(item.id, item.title)} />
                                <Button title="Delete" onPress={() => handleDelete(item.id)} />
                            </>
                        )}
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        marginTop : 40
    },
    todoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#f0f0f0',
        padding: 10,
        marginVertical: 5,
        borderRadius: 10,
        width: '100%',
    },
    todoItem: {
        fontSize: 18,
        padding: 10,
        flex: 1,
    },
    completedTodo: {
        textDecorationLine: 'line-through',
        color: 'gray',
    },
});

export default TodoScreen;

// //redux persist
import React, { useState } from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Image,
    Modal,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, updateTodo, markAsDone } from '../redux/action';

const todoScreen = () => {
    const [todo, setTodo] = useState('');
    const [editedToDo, setEditedToDo] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    // Redux state
    const todoList = useSelector(state => state.todoList || []);
   
    const dispatch = useDispatch();
    
    const handleAddTodo = () => {
        if (!todo.trim()) {
            console.log('Todo is empty');
            return; 
        }

        if (editedToDo) {
            console.log('Updating Todo:', { ...editedToDo, title: todo });
            dispatch(updateTodo({
                ...editedToDo,
                title: todo,
            }));
            setEditedToDo(null);
        } else {
            const newTodo = {
                id: Date.now().toString(),
                title: todo,
            };
            console.log('Adding Todo:', newTodo);
            dispatch(addTodo(newTodo));
        }
        setTodo('');
        setModalVisible(false);
    };

    // Delete task
    const handleDeleteToDo = (id) => {
        console.log('Deleting Todo ID:', id);
        dispatch(deleteTodo(id));
    };

    // Edit task
    const handleEditToDo = (item) => {
        setEditedToDo(item);
        setTodo(item.title);
        setModalVisible(true);
    };

    const handleMarkAsDone = (item) => {
        console.log('Marking Todo as Done:', item);
        dispatch(markAsDone(item.id)); 
    };

    // Render tasks
    const renderToDos = ({ item }) => (
        
        <View style={styles.todoItem}>
            <Text style={{ flex: 1 }}>{item.title}</Text>

            <TouchableOpacity onPress={() => handleEditToDo(item)} style={styles.iconButton}>
                <Image
                    source={require('../../Images/edit.png')}
                    style={styles.icon}
                />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleMarkAsDone(item)} style={styles.iconButton}>
                <Image
                    source={require('../../Images/done.png')}
                    style={styles.icon}
                />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleDeleteToDo(item.id)} style={styles.iconButton}>
                <Image
                    source={require('../../Images/delete.png')}
                    style={styles.icon}
                />
            </TouchableOpacity>
        </View>
    );
    

    return (
        <View style={{ marginVertical: 16, marginHorizontal: 16 }}>
            {/* Welcome Msg */}
            <Text style={styles.welcomeText}>Welcome Aarya</Text>
            <Text style={styles.createTaskText}>Create tasks to achieve more!</Text>

            {/* No task msg */}
            {todoList.length === 0 && (
                <View style={styles.noTaskContainer}>
                    <Image
                        source={require('../../Images/notask.png')}
                        style={styles.noTaskImage}
                    />
                    <Text style={styles.noTaskText}>No tasks available!</Text>
                    <TouchableOpacity
                        style={styles.addButton}
                        onPress={() => setModalVisible(true)} // Open modal to add task
                    >
                        <Text style={styles.addButtonText}>Add a Task</Text>
                    </TouchableOpacity>
                </View>
            )}

            {/* Task list */}
            {todoList.length > 0 && (
                <>
                    <View style={{height:'78%'}}>
                        <FlatList
                            data={todoList}
                            renderItem={renderToDos}
                            keyExtractor={(item) => item.id}
                        />
                    </View>
                    <TouchableOpacity
                        style={styles.addButton}
                        onPress={() => setModalVisible(true)} 
                    >
                    <Text style={styles.addButtonText}>Add New Task</Text>
                    </TouchableOpacity>
                </>
            )}

            {/* Modal for Adding/Editing task */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalView}>
                        <TextInput 
                            style={styles.input}
                            placeholder="Enter a task"
                            value={todo}
                            onChangeText={(userText) => setTodo(userText)}
                        />

                        <TouchableOpacity
                            style={[styles.button, styles.buttonClose]}     
                            onPress={handleAddTodo}
                        >
                            <Text style={styles.addButtonText}>{editedToDo ? 'Update' : 'Add'} Task</Text>
                        </TouchableOpacity>
                        
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default todoScreen;

const styles = StyleSheet.create({
    // Welcome msg
    welcomeText: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'left',
        marginVertical: 4,
    },
    createTaskText: {
        fontSize: 15,
        textAlign: 'left',
        marginBottom: 20,
    },

    // No task container 
    noTaskContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    noTaskImage: {
        width: 150,
        height: 150,
        marginTop:40,
        marginBottom: 20,
        resizeMode: 'contain',
    },
    noTaskText: {
        fontSize: 18,
        color: 'gray',
        marginBottom: 20,
    },

    // Task item 
    todoItem: {
        backgroundColor: '#cfecf7',
        borderRadius: 6,
        paddingVertical: 14,
        paddingHorizontal: 14,
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 0,
    },
    input: {
        borderWidth: 2,
        borderColor: '#000',
        borderRadius: 6,
        paddingVertical:8,
        paddingHorizontal: 10,
        marginTop: 15,
        width:'90%',
    },
    addButton: {
        backgroundColor: '#1e97f3',
        borderRadius: 6,
        paddingVertical: 14,
        paddingHorizontal:12,
        alignItems: 'center',
        marginBottom: 25,
        marginTop:10,
    },
    addButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },
    iconButton: {
        marginRight: 11,
        marginLeft:4,
    },
    icon: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
    },

    // Modal 
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView: {
        width: 350,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 10,
        padding: 10,
        marginTop: 15,
    },
    buttonClose: {
        backgroundColor: '#1e97f3',
    },
});




// async redux
// import React, { useState } from 'react';
// import {
//   FlatList,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
//   Image,
//   Modal,
// } from 'react-native';
// import { useSelector, useDispatch } from 'react-redux';
// import { addTodo, deleteTodo, updateTodo } from '../redux/actions';

// const todoScreen = () => {
//   const [todo, setTodo] = useState('');
//   const [editedToDo, setEditedToDo] = useState(null);
//   const [modalVisible, setModalVisible] = useState(false);

//   const dispatch = useDispatch();
//   const todoList = useSelector((state) => state.todos.todoList);
  

//   const handleAddTodo = () => {
//     if (editedToDo) {
//       handleUpdate();
//     } else {
//       const newTodo = { id: Date.now().toString(), title: todo };
//       dispatch(addTodo(newTodo));
//       setTodo('');
//     }
//     setModalVisible(false);
//   };

//   const handleDeleteToDo = (id) => {
//     dispatch(deleteTodo(id));
//   };

//   const handleEditToDo = (item) => {
//     setEditedToDo(item);
//     setTodo(item.title);
//     setModalVisible(true);
//   };

//   const handleUpdate = () => {
//     const updatedTodo = { ...editedToDo, title: todo };
//     dispatch(updateTodo(updatedTodo));
//     setEditedToDo(null);
//     setTodo('');
//   };

//   const renderToDos = ({ item }) => (
//     <View style={styles.todoItem}>
//       <Text style={{ flex: 1 }}>{item.title}</Text>

//       <TouchableOpacity onPress={() => handleEditToDo(item)} style={styles.iconButton}>
//         <Image source={require('../../Images/edit.png')} style={styles.icon} />
//       </TouchableOpacity>

//       <TouchableOpacity onPress={() => handleDeleteToDo(item.id)} style={styles.iconButton}>
//         <Image source={require('../../Images/trash.png')} style={styles.icon} />
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <View style={{ marginVertical: 16, marginHorizontal: 16 }}>
//       {/* Welcome Msg */}
//       <Text style={styles.welcomeText}>Welcome Aarya</Text>
//       <Text style={styles.createTaskText}>Create tasks to achieve more!</Text>

//       {/* No task msg */}
//       {todoList.length <= 0 && (
//         <View style={styles.noTaskContainer}>
//           <Image source={require('../../Images/notask.png')} style={styles.noTaskImage} />
//           <Text style={styles.noTaskText}>No tasks available!</Text>
//           <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
//             <Text style={styles.addButtonText}>Add a Task</Text>
//           </TouchableOpacity>
//         </View>
//       )}

//       {/* Task list */}
//       {todoList.length > 0 && (
//         <>
//           <FlatList data={todoList} renderItem={renderToDos} keyExtractor={(item) => item.id} />
//           <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
//             <Text style={styles.addButtonText}>Add New Task</Text>
//           </TouchableOpacity>
//         </>
//       )}

//       {/* Modal for Adding/Editing task */}
//       <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
//         <View style={styles.modalContainer}>
//           <View style={styles.modalView}>
//             <TextInput
//               style={styles.input}
//               placeholder="Enter a task"
//               value={todo}
//               onChangeText={(userText) => setTodo(userText)}
//             />

//             <TouchableOpacity style={[styles.button, styles.buttonClose]} onPress={handleAddTodo}>
//               <Text style={styles.addButtonText}>{editedToDo ? 'Update' : 'Add'} Task</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// export default todoScreen;


// const styles = StyleSheet.create({
//   //Welcome msg
//   welcomeText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'left',
//     marginVertical: 4,
//   },
//   createTaskText: {
//     fontSize: 16,
//     textAlign: 'left',
//     marginBottom: 20,
//   },

//   // No task container
//   noTaskContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 50,
//   },
//   noTaskImage: {
//     width: 150,
//     height: 150,
//     marginTop: 40,
//     marginBottom: 20,
//     resizeMode: 'contain',
//   },
//   noTaskText: {
//     fontSize: 18,
//     color: 'gray',
//     marginBottom: 20,
//   },

//   // Task item
//   todoItem: {
//     backgroundColor: '#cfecf7',
//     borderRadius: 6,
//     paddingVertical: 14,
//     paddingHorizontal: 14,
//     marginBottom: 16,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   input: {
//     borderWidth: 2,
//     borderColor: '#000',
//     borderRadius: 6,
//     paddingVertical: 8,
//     paddingHorizontal: 10,
//     marginTop: 15,
//     width: '90%',
//   },
//   addButton: {
//     backgroundColor: '#1e97f3',
//     borderRadius: 6,
//     paddingVertical: 16,
//     paddingHorizontal: 15,
//     alignItems: 'center',
//     marginBottom: 30,
//   },
//   addButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 18,
//   },
//   iconButton: {
//     marginRight: 16,
//   },
//   icon: {
//     width: 24,
//     height: 24,
//     resizeMode: 'contain',
//   },

//   // Modal
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//   },
//   modalView: {
//     width: 350,
//     backgroundColor: 'white',
//     borderRadius: 20,
//     padding: 20,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   button: {
//     borderRadius: 10,
//     padding: 10,
//     marginTop: 15,
//   },
//   buttonClose: {
//     backgroundColor: '#1e97f3',
//   },
// });


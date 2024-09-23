// import React, { useState } from 'react';
// import { Icon } from 'react-native-vector-icons/FontAwesome';
// import{
//     FlatList,
//     StyleSheet,
//     Text,
//     TextInput,
//     TouchableOpacity,
//     View
// } from 'react-native'

// import Fallback from '../../components/Fallback';


// const dummyData = [
//     {
//         id:"1",
//         title:"Wash-clothes",
//     },
//     {
//         id:"2",
//         title:"Read a book",
//     },
//     {
//         id:"3",
//         title:"Write a blog",
//     },
 
// ];


// const ToDoScreen = () => {

//     //init local states
//     const [todo, setTodo]=useState("");
//     const[todoList, setTodoList]=useState([])   
//     //handle add to do
//     const handleAddTodo = () =>{
//         //structure of single item 
//         //{ id:1, title:'wash'}
//         setTodoList([...todoList, {id: Date.now().toString(), title:todo}]);
//         setTodo("")
//     }

//     //handle delete
//     const handleDeleteToDo = (id) =>{
//         const updateToDoList = todoList.filter((todo)=> todo.id != id)
//         setTodoList(updateToDoList) 
//     }

//     //Render Todo
//     const renderToDos = ({item, index}) =>{
//         return(
//             <View style={{
//                 backgroundColor:'#C0C0C0',
//                 borderRadius:6,
//                 paddingVertical:14,
//                 paddingHorizontal:14,
//                 marginBottom:16,
//                 flexDirection:'row'
                
//             }}>
//                  <Text style={{ flex: 1 }}>{item.title}</Text>

//                 <Icon
//                     name="pencil" 
//                     size={24} 
//                     color='#000'
//                     onPress={() => alert('Edit pressed')} 
//                     style={{ marginRight: 16 }} 
//                 />
//                 <Icon 
//                     name="trash" 
//                     size={24} 
//                     color='#000'
//                     onPress={() => handleDeleteToDo(item.id)} 
//                 />
               
//             </View>
//         )
//     };

//     return(
//         <View style={{marginVertical:16, marginHorizontal:16}}>

//             <TextInput style={{
//                 borderWidth: 2, 
//                 borderBlockColor:'#00008B',
//                 borderRadius:6, 
//                 paddingVertical:8,
//                 marginTop:15
//              }}
//              placeholder='Add a Task'
//              value={todo}
//              onChangeText={(userText) => setTodo(userText)}
//              > 
//             </TextInput>

//             <TouchableOpacity
//             style={{
//                 backgroundColor:'#000',
//                 borderRadius: 6,
//                 paddingVertical: 16,
//                 marginTop: 24,
//                 alignItems:'center',
//                 marginVertical:40
//             }}
//             onPress={()=> handleAddTodo()}
//             >
//             <Text style={{color:'#fff', fontWeight:'bold',fontSize:20}}>Add</Text>
//             </TouchableOpacity>


//             {/* Render To Do List */}

//             <FlatList data={todoList} renderItem={renderToDos}> </FlatList>
           
//         </View>
//     )
// } 

// export default ToDoScreen

// const style=StyleSheet.create({})


//No updation
// import React, { useState } from 'react';
// import {
//     FlatList,
//     StyleSheet,
//     Text,
//     TextInput,
//     TouchableOpacity,
//     View,
//     Image,
//     ScrollView
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native'; 
// import BottomTabNav from './BottomTabNav'; 

// const ToDoScreen = () => {
//     const [todo, setTodo] = useState('');
//     const [todoList, setTodoList] = useState([]);
//     const [editedToDo, setEditedToDo] = useState(null);

//     const handleAddTodo = () => {
//         if (editedToDo) {
//             handleUpdate();
//         } else {
//             setTodoList([...todoList, { id: Date.now().toString(), title: todo }]);
//             setTodo('');
//         }
//     };

//     const handleDeleteToDo = (id) => {
//         const updateToDoList = todoList.filter((todo) => todo.id !== id);
//         setTodoList(updateToDoList);
//     };

//     const handleEditToDo = (item) => {
//         setEditedToDo(item);
//         setTodo(item.title);
//     };

//     const handleUpdate = () => {
//         const updatedToDoList = todoList.map((item) =>
//             item.id === editedToDo.id ? { ...item, title: todo } : item
//         );
//         setTodoList(updatedToDoList);
//         setEditedToDo(null);
//         setTodo('');
//     };

//     const renderToDos = ({ item }) => {
//         return (
//                 <View style={styles.todoItem}>
//                         <Text style={{ flex: 1 }}>{item.title}</Text>

//                         <TouchableOpacity onPress={() => handleEditToDo(item)} style={styles.iconButton}>
//                             <Image
//                                 source={require('../../Images/edit.png')}
//                                 style={styles.icon}
//                             />
//                         </TouchableOpacity>

//                         <TouchableOpacity onPress={() => handleDeleteToDo(item.id)} style={styles.iconButton}>
//                             <Image
//                                 source={require('../../Images/trash.png')}
//                                 style={styles.icon}
//                             />
//                         </TouchableOpacity>
                    
//                 </View>
            
//         );
//     };

//     return (
//         <View style={{ marginVertical: 16, marginHorizontal: 16 }}>
//             <TextInput
//                 style={styles.input}
//                 placeholder='Add a Task'
//                 value={todo}
//                 onChangeText={(userText) => setTodo(userText)}
//             />

//             <TouchableOpacity
//                 style={styles.addButton}
//                 onPress={handleAddTodo}
//             >
//                 <Text style={styles.addButtonText}>
//                     {editedToDo ? 'Update' : 'Add'}
//                 </Text>
//             </TouchableOpacity>
                      
//                 <FlatList
//                     data={todoList}
//                     renderItem={renderToDos}
//                     keyExtractor={(item) => item.id}
//                 />
                
//         </View>
//     );
// };

// export default ToDoScreen;

// const styles = StyleSheet.create({
//     todoItem: {
//         backgroundColor: '#cfecf7',
//         borderRadius: 6,
//         paddingVertical: 14,
//         paddingHorizontal: 14,
//         marginBottom: 16,
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
//     input: {
//         borderWidth: 2,
//         borderColor: '#000',
//         borderRadius: 6,
//         paddingVertical: 8,
//         paddingHorizontal: 10,
//         marginTop: 15,
//     },

//     addButton: {
//         backgroundColor: '#000',
//         borderRadius: 6,
//         paddingVertical: 16,
//         marginTop: 24,
//         alignItems: 'center',
//         marginBottom: 30,
//     },
//     addButtonText: {
//         color: '#fff',
//         fontWeight: 'bold',
//         fontSize: 20,
//     },
//     iconButton: {
//         marginRight: 16,
//     },
//     icon: {
//         width: 24,
//         height: 24,
//         resizeMode: 'contain',
//     },
// });




//updated design with modal
// import React, { useState } from 'react';
// import {
//     FlatList,
//     StyleSheet,
//     Text,
//     TextInput,
//     TouchableOpacity,
//     View,
//     Image,
//     Modal,
// } from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';
// import { addTodo, deleteTodo, editTodo, updateTodo } from '../redux/actions';
// import { ADD_TODO } from '../redux/actionTypes';
// import { PersistGate } from 'redux-persist/integration/react'

// const ToDoScreen = () => {
//     const [todo, setTodo] = useState('');
//     const [todoList, setTodoList] = useState([]);
//     const [editedToDo, setEditedToDo] = useState(null);
//     const [modalVisible, setModalVisible] = useState(false); 
    

//     // add, update the task
//     const handleAddTodo = () => {
//         if (editedToDo) {
//             handleUpdate();
//         } else {
//            setTodoList([{ id: Date.now().toString(), title: todo }, ...todoList]) ;
//             setTodo('');
//         }
//         setModalVisible(false); 
//     };

//     const handleDeleteToDo = (id) => {
//         const updatedToDoList = todoList.filter((todo) => todo.id !== id);
//         setTodoList(updatedToDoList);
//     };

//     const handleEditToDo = (item) => {
//         setEditedToDo(item);
//         setTodo(item.title);
//         setModalVisible(true); 
//     };

//     const handleUpdate = () => {
//         const updatedToDoList = todoList.map((item) =>
//             item.id === editedToDo.id ? { ...item, title: todo } : item
//         );
//         setTodoList(updatedToDoList);
//         setEditedToDo(null);
//         setTodo('');
//     };


//     const renderToDos = ({ item }) => (
//         <View style={styles.todoItem}>
//             <Text style={{ flex: 1 }}>{item.title}</Text>

//             <TouchableOpacity onPress={() => completeToDo(item)} style={styles.iconButton}>
//                 <Image
//                     source={require('../../Images/done-icon.png')}
//                     style={styles.icon}
//                 />
//             </TouchableOpacity>

//             <TouchableOpacity onPress={() => handleEditToDo(item)} style={styles.iconButton}>
//                 <Image
//                     source={require('../../Images/edit.png')}
//                     style={styles.icon}
//                 />
//             </TouchableOpacity>

//             <TouchableOpacity onPress={() => handleDeleteToDo(item.id)} style={styles.iconButton}>
//                 <Image
//                     source={require('../../Images/trash.png')}
//                     style={styles.icon}
//                 />
//             </TouchableOpacity>
//         </View>
//     );

//     return (
//         <View style={{ marginVertical: 16, marginHorizontal: 16 }}>
//             {/* Welcome Msg */}
//             <Text style={styles.welcomeText}>Welcome Aarya</Text>
//             <Text style={styles.createTaskText}>Create tasks to achieve more!</Text>

//             {/* No task msg */}
//             {todoList.length === 0 && (
//                 <View style={styles.noTaskContainer}>
//                     <Image
//                         source={require('../../Images/notask.png')}
//                         style={styles.noTaskImage}
//                     />
//                     <Text style={styles.noTaskText}>No tasks available!</Text>
//                     <TouchableOpacity
//                         style={styles.addButton}
//                         onPress={() => setModalVisible(true)} // Open modal to add task
//                     >
//                         <Text style={styles.addButtonText}>Add a Task</Text>
//                     </TouchableOpacity>
//                 </View>
//             )}

//             {/* Task list */}
//             {todoList.length > 0 && (
//                 <>
//                 <View style={{height: '78%'}}>
//                     <FlatList
//                         data={[...todoList].reverse()}
//                         renderItem={renderToDos}
//                         keyExtractor={(item) => item.id}
//                     />
//                 </View>
//                     <TouchableOpacity
//                         style={styles.addButton}
//                         onPress={() => setModalVisible(true)} 
//                     >
//                         <Text style={styles.addButtonText}>Add New Task</Text>
//                     </TouchableOpacity>
//                 </>
//             )}

//             {/* Modal for Adding/Editing task */}
//             <Modal
//                 animationType="slide"
//                 transparent={true}
//                 visible={modalVisible}
//                 onRequestClose={() => setModalVisible(false)}
//             >
//                 <View style={styles.modalContainer}>
//                     <View style={styles.modalView}>
//                         <TextInput 
//                             style={styles.input}
//                             placeholder="Enter a task"
//                             value={todo}
//                             onChangeText={(userText) => setTodo(userText)}
//                         />

//                         <TouchableOpacity
//                             style={[styles.button, styles.buttonClose]}
//                             onPress={handleAddTodo}
//                         >
//                             <Text style={styles.addButtonText}>{editedToDo ? 'Update' : 'Add'} Task</Text>
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//             </Modal>
//         </View>
//     );
// };

// export default ToDoScreen;

// const styles = StyleSheet.create({
//     // Welcome msg
//     welcomeText: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         textAlign: 'left',
//         marginVertical: 2,
//     },
//     createTaskText: {
//         fontSize: 16,
//         textAlign: 'left',
//         marginBottom: 20,
//     },

//     // No task container 
//     noTaskContainer: {
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginTop: 50,

//     },
//     noTaskImage: {
//         width: 150,
//         height: 150,
//         marginTop:40,
//         marginBottom: 20,
//         resizeMode: 'contain',
//     },
//     noTaskText: {
//         fontSize: 18,
//         color: 'gray',
//         marginBottom: 20,
//     },

//     // Task item 
//     todoItem: {
//         backgroundColor: '#cfecf7',
//         borderRadius: 6,
//         paddingVertical: 14,
//         paddingHorizontal: 14,
//         marginBottom: 16,
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
//     input: {
//         borderWidth: 2,
//         borderColor: '#000',
//         borderRadius: 6,
//         paddingVertical:8,
//         paddingHorizontal: 10,
//         marginTop: 15,
//         width:'90%',

       
//     },
//     addButton: {
//         backgroundColor: '#1e97f3',
//         borderRadius: 6,
//         paddingVertical: 16,
//         paddingHorizontal:15,
//         alignItems: 'center',
//         marginBottom: 10,
//         marginTop:10,
//     },
//     addButtonText: {
//         color: '#fff',
//         fontWeight: 'bold',
//         fontSize: 18,
//     },
//     iconButton: {
//         marginRight: 16,
//     },
//     icon: {
//         width: 24,
//         height: 24,
//         resizeMode: 'contain',
//     },

//     // Modal 
//     modalContainer: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'rgba(0,0,0,0.5)',
//     },
//     modalView: {
//         width: 350,
//         backgroundColor: 'white',
//         borderRadius: 20,
//         padding: 20,
//         alignItems: 'center',
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.25,
//         shadowRadius: 4,
//         elevation: 5,
//     },
//     button: {
//         borderRadius: 10,
//         padding: 10,
//         marginTop: 15,
//     },
//     buttonClose: {
//         backgroundColor: '#1e97f3',
//     },
// });
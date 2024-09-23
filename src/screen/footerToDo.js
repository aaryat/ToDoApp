import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

function FooterToDo () {
  const handlePress = (link) => {
    // Handle button press (e.g., navigate to a URL or screen)
    console.log(`Pressed ${link}`);
  };

  return (
    <View style={styles.footerToDo}>
      <TouchableOpacity onPress={() => handlePress('https://example.com/link1')}>
        <Image
          source={require('../../Images/todo-icon.png')} 
          style={styles.buttonImage}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress('https://example.com/link2')}>
        <Image
        source={require('../../Images/create-icon.png')} 

          style={styles.buttonImage}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress('https://example.com/link3')}>
        <Image
          source={require('../../Images/search-icon.png')} 
          style={styles.buttonImage}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress('https://example.com/link4')}>
        <Image
          source={require('../../Images/done-icon.png')} 
          style={styles.buttonImage}
        />
      </TouchableOpacity>
    </View>
  );
};
export default FooterToDo


const styles = StyleSheet.create({
  footerToDo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 5,
    borderWidth: 1,
    borderTopColor: '#ddd',
    position: 'relative', 
    bottom: 0, 
    left: 0,   
    right: 0,  
  },
  
  buttonImage: {
    width: 35,
    height: 35,
  },
});


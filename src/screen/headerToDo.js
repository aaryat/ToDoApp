import React from 'react'
import {
  Text, 
  View, 
  StyleSheet,
  Image
} from 'react-native'

function HeaderToDo() {
  return (
    <View style={styles.headerContainer}>
    <View style={styles.logoContainer}>
      <Image
        source={require('../../Images/appicon.jpg')} 
        style={styles.logo}
      />
      <Text style={styles.appName}>TODO</Text>
    </View>
    <View style={styles.profileContainer}>
      <Text style={styles.profileName}>Aarya</Text>
      <Image
        source={require('../../Images/profile.png')} 
        style={styles.profilePhoto}
      />
    </View>
  </View>
  );
}

export default HeaderToDo

const styles = StyleSheet.create({
    
    headerContainer:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems: 'center',
      backgroundColor:'#fff',
      borderWidth: 1,
      borderBottomColor:'#ddd',
      paddingVertical: 12,
      paddingHorizontal:10,
    },
    logoContainer:{
      flexDirection: 'row',
      alignItems:'center',

    },
    logo:{
      width:40,
      height: 40,
      marginHorizontal:8
    },
    appName: {
         fontSize: 20,
         fontWeight: 'bold',
         color: '#333', 
       },
    profileContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    profileName: {
      fontSize: 16,
      color: '#333',
      marginRight: 8,
    },
    profilePhoto: {
      width: 40, 
      height: 40, 
      borderRadius: 20, 
    },
  });
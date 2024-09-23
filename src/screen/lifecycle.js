import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useState } from 'react'

const lifecycle = () => {

  const[count, setCount]= useState(0);

  useEffect(()=>{
    //we can call API here
    console.warn("hello");
  },[])  


  return (
    <View>
      <Button title= 'Update Me' onPress={()=> setCount(count+1)}>Submit</Button>
    </View>
  )
}

export default lifecycle





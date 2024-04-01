import {BottomSheet} from '@rneui/themed'
import { View, Text, TouchableOpacity,StyleSheet,TextInput} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import React from 'react'

export default function BottomSheetComponent({isVisible,showBottomSheet}) {
  const closeModal=() => {
    showBottomSheet()
  }
  return (
    <BottomSheet isVisible={isVisible}>
      <View style={styles.container}>
        <View style={{marginHorizontal:10,marginTop:10}}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
          <Text style={{fontSize:30,fontWeight:'400',marginRight:10}}>Add New Task</Text>
        <FontAwesome name="tasks" size={24} color="black" />
          </View>
          <TextInput placeholder='Enter Your Task' style={styles.inputStyle} maxLength={8}/>
      <View>
      <TouchableOpacity onPress={closeModal}>
      <Text>Close Modal</Text>
      </TouchableOpacity>
      </View>
      </View>
      
      </View>
    
    </BottomSheet>
  )
}

const styles = StyleSheet.create({
  container:{
    height:250,
    backgroundColor:"#FFF",
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    flex:1,
  },
  inputStyle:{
    borderRadius:5,
    borderColor:'red',
    borderWidth:1
    
    //backgroundColor:'red'
  }
})
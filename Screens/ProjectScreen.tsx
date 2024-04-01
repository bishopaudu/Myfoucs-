import {View,Text,StyleSheet, TouchableOpacity} from 'react-native'
import HeaderMenu from '../components/HeaderMenu'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import BottomSheetComponent from '../components/BottomSheetComponent';
export default function ProjectScreen() {
    const[isVisible,setIsVisible] = useState(false)
    const showBottomSheet =() => {
        setIsVisible(!isVisible)
    }
    return (
        <SafeAreaView style={styles.mainContainer}>
            <HeaderMenu/>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:5}}>
                <Text style={{fontSize:30,color:'#fff'}}>Tasks</Text>
                <TouchableOpacity onPress={() => {console.log('add'),showBottomSheet()}}>
                <AntDesign name="pluscircle" size={25} color='#FF5347'/>
                </TouchableOpacity>            
            </View>
           {isVisible && <BottomSheetComponent isVisible={isVisible} showBottomSheet={showBottomSheet}/>}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create ({
    mainContainer:{
        flex:1,
        backgroundColor:'#031B44'
    },

})
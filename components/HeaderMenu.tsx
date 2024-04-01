import { View,StyleSheet,TouchableOpacity,Text} from "react-native";
import { useState } from "react";

export default function HeaderMenu() {
    let sortdata =['All','completed','Unfinished']
    const[active,setActive] = useState(sortdata[0])
   

    return (
        <View style={styles.mainContainer}>
            {
                sortdata.map((data,index) => {
                    let headerActive = data == active
                    
                    return (
                        <TouchableOpacity
                        key={index}
                        style={[styles.buttonStyle, headerActive && {backgroundColor:'#FF5347'}]}
                        onPress={() => {setActive(data),console.log(data)}}
                    >
                        <Text style={[styles.textStyle, headerActive && styles.activeStyle]}>{data}</Text>
                    </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        flexDirection:'row',
        backgroundColor:"#E5E5EA",
        justifyContent:'space-around',
        alignItems:'center',
        margin:10,
        borderRadius:10,
    },
    buttonStyle:{
        paddingVertical:5,
        paddingHorizontal:5,
        flex:1,
        justifyContent:'space-between',
        borderRadius:5,
        alignItems:'center'
       
    },
    activeStyle:{
        color:'#FFF'
    },
    textStyle:{
        fontSize:20,
    }
})
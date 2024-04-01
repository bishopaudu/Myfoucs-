import { View,Text,StyleSheet} from "react-native";
import Lottie from 'lottie-react-native'
import { useEffect,useRef} from "react";
import { useNavigation } from "@react-navigation/native";

export default function SplashScreen(){
    const navigation = useNavigation()
    const animation = useRef<Lottie>(null)


    const touched = ()=> {
        console.log("touched");
        navigation.navigate('projectscreen')
    }

    useEffect(() => {
        animation.current?.play()
    },[])


    return(
        <View style={styles.contianer}>
            <View>
                <Lottie
                autoPlay={true}
                ref={animation}
                source={require("../lottiefiles/timerAnimation.json")}
                style={{
                    width:100,
                    height:300
                }}
                />
            </View>
            <Text style={styles.textStyle}>MyFocus Timer</Text>
            <Text style={styles.subText}>Procastination Hinders you fron doing great work.</Text>
            <Text style={styles.subText}>Stop Procastination And Do Great Work Today.</Text>
            <View style={styles.startButton} >
                <Text style={{textAlign:"center",textTransform:"uppercase",fontSize:20}} onPress={touched}>Start</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contianer:{
        flex:1,
        backgroundColor:'#031B44',
        alignItems:'center',
        justifyContent:'center'
    },
    textStyle:{
        color:'#fff',
        fontSize:40,
        letterSpacing:1,
        fontWeight:"400"
    },
    startButton:{
        backgroundColor:"#7393DD",
         width: 150,
        paddingVertical: 15,
        borderRadius: 25,
        marginTop: 20,
    },
    subText:{
        fontWeight:"300",
        color:'#fff'
    }
})
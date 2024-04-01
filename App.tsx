import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View} from 'react-native';
//import SplashScreen from './Screens/SplashScreen'
import RootNavigator from './Navigation';



export default function App() {
  const ontouch =()=> {
    console.log('touchd')
  }
  return (
    <View style={styles.container}>
      <RootNavigator/>
     {/** <SplashScreen/>*/} 
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});

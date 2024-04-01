import {createNativeStackNavigator} from '@react-navigation/native-stack'
import SplashScreen from '../Screens/SplashScreen'
import ProjectScreen from '../Screens/ProjectScreen'

const HomeStack = createNativeStackNavigator()

const HomeStackNavigator = () => {
    return(
        <HomeStack.Navigator>
        <HomeStack.Screen name='splash' component={SplashScreen} options={{headerShown:false}} />
        <HomeStack.Screen name='projectscreen' component={ProjectScreen}  options={{headerShown:false}} />
    </HomeStack.Navigator>
    )

}

export default HomeStackNavigator;
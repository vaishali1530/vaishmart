import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Splash from '../screen/Splash.js'


const stack = createStackNavigator()
const StackNav=()=>{
      return(
        <stack.Navigator initialRouteName={Splash}>
            <stack.Screen name = 'Splash' component={Splash} options={{headerShown:false,}}/>
        </stack.Navigator>
      )
}
export default StackNav
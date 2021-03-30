/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, { Component } from 'react';
//import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  Image
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SocialVideo from './Screens/SocialVideo';
import ChatScreen from './Screens/ChatScreen.js';
import VideoScreen from './Screens/VideoScreen.js';
import SideMenu from './Screens/SideMenu.js';
import BottomTabBar from './Screens/BottomTab/BottomTabBar'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './Screens/joiningScreen/loginScreen/LoginScreen';
import LoginAgree from './Screens/joiningScreen/agree_continue/LoginAgree';
import TeamCondition from './Screens/joiningScreen/TeamCondition.js';
import TeamsForm from './Screens/joiningScreen/TeamsForm.js';
import SignupInfo from "./Screens/joiningScreen/AdditionInfo/SignupInfo.js";
import OpenClass from './Screens/OpenClass/OpenClass.js'
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// function MyTabBar({ state, descriptors, navigation }){
//   return(
//     <SafeAreaView style={{backgroundColor:'#DADADA'}}>
//       <View style={{flexDirection:'row',marginTop:10,alignItems:'center',justifyContent:'space-around',backgroundColor:'#DADADA'}}>
//         <TouchableOpacity onPress={()=>navigation.navigate('SocialVideo')}>
//           <Image style={{width:20,height:20}}
//           source={require('./Images/SmilIcon.png')}
//           />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={()=>navigation.navigate('ChatScreen')}>
//           <Image style={{width:20,height:20}}
//           source={require('./Images/ChatIcon.png')}
//           />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={()=>navigation.navigate('VideoScreen')}>
//           <Image style={{width:20,height:20}}
//           source={require('./Images/VideoIcon.png')}
//           />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={()=>navigation.navigate('SideMenu')}>
//           <Image style={{width:20,height:20}}
//           source={require('./Images/MenuIcon.png')}
//           />
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   )
//}

export default class app extends Component{
  constructor(props){
    super(props)
    this.state={

    }
  }
   MyTabsBar() {
    return (
      <Tab.Navigator tabBar={props => <BottomTabBar {...props} />}>
        <Tab.Screen name="SocialVideo" component={SocialVideo} />
        <Tab.Screen name="ChatScreen" component={ChatScreen} />
        <Tab.Screen name="VideoScreen" component={VideoScreen} />
        <Tab.Screen name="SideMenu" component={SideMenu} />
        <Tab.Screen name="LoginScreen" component={LoginScreen} />
        <Tab.Screen name="LoginAgree" component={LoginAgree} />
        <Tab.Screen name="OpenClass" component={OpenClass} />
      </Tab.Navigator>
    );
  }
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MyTabsBar" component={this.MyTabsBar} options={{headerShown: false}} />
          <Stack.Screen name="TeamCondition" component={TeamCondition} options={{headerShown: false}} />
          <Stack.Screen name="TeamsForm" component={TeamsForm} options={{headerShown: false}} />
          <Stack.Screen name="SignupInfo" component={SignupInfo} options={{headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});


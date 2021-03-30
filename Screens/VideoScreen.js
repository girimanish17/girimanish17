import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
  ImageBackground
} from 'react-native';

export default class App extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
            <SafeAreaView>
                <View style={{alignSelf:'center',justifyContent:'center',marginTop:200}}>
                    <Text style={{fontSize:20,fontWeight:'700'}}>Video Screen</Text>
                </View>
            </SafeAreaView>
        )
    }
}
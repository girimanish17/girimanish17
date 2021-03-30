import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity} from 'react-native';
//import loginImg from '../../../Images/loginImg';

export default class LoginScreen extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
            <SafeAreaView style={{flex:1}}>
                <View style={{backgroundColor:"#E5E5E5",flex:1}}>
                    <View style={{alignSelf:"baseline",marginTop:16,height:50,width:60,marginLeft:25,justifyContent:"center",alignItems:"center"}}>
                        <Text style={{color:"black",fontWeight:'bold',fontSize:18,}}>씨클</Text>
                    </View>
                    <View style={{alignSelf:'center',justifyContent:'center',flex:1}}>
                        <TouchableOpacity 
                            onPress={()=> this.props.navigation.navigate("LoginAgree")}
                            style={{justifyContent:"center",alignItems:"center"}}>
                            <Image source={require('../../../Images/loginImg.png')}
                                style={{height:45,width:183,overflow:"hidden"}} />
                        </TouchableOpacity>
                  </View>
                </View>
            </SafeAreaView>
        )
    }
}
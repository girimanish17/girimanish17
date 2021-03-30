import React, { Component } from 'react';
//import type {Node} from 'react';
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

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class app extends Component{
    constructor(props){
        super(props)
        this.state={
            MicHide:false,
            SpekerHid:false,
            CameraHid:false,
            cameraSwitch:false
        }
    }
    openClassBtn = () =>{
      this.props.navigation.navigate("LoginScreen");
    }
    render(){
        return(
            <SafeAreaView style={{flex:1}}>
                <ScrollView>
                <View style={{marginTop:20,flex:1}}>
                    <Text style={{marginLeft:20,fontSize:16,fontWeight:'600'}}>소셜 화상 클래스 - 씨클</Text>
                    <View style={{alignSelf:'center',width:'90%',height:300,alignItems:'center',marginTop:20,alignItems:'center'}}>
                        <ImageBackground style={{width:'100%',height:'100%',borderRadius:20,alignSelf:'center',overflow:'hidden',marginTop:60}} resizeMode="cover"
                            source={require('../Images/KhargoshImage.png')}
                        >
                            <View style={{flexDirection:'row',borderRadius:20,marginTop:265,backgroundColor:'#C4C4C4',height:30,alignItems:'center',width:'60%',justifyContent:'space-around',alignSelf:'center'}}>
                            <TouchableOpacity onPress={()=>this.setState({MicHide:!this.state.MicHide})}>
                               {this.state.MicHide ==false?
                                <Image style={{width:20,height:20,alignItems:'center',justifyContent:'center'}} resizeMode='contain'
                                    source={require('../Images/MIce.png')}
                                />
                               :null}
                                {this.state.MicHide ?
                                <Image style={{width:20,height:20,alignItems:'center',justifyContent:'center'}} resizeMode='contain'
                                    source={require('../Images/MiceOff.png')}
                                 />
                                :null}
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.setState({SpekerHid:!this.state.SpekerHid})}>
                                {this.state.SpekerHid ==false?
                                <Image style={{width:20,height:20,alignItems:'center',justifyContent:'center'}} resizeMode='contain'
                                    source={require('../Images/Speeker.png')}
                                />
                                :null}
                               {this.state.SpekerHid?
                                <Image style={{width:20,height:20,alignItems:'center',justifyContent:'center'}} resizeMode='contain'
                                    source={require('../Images/SpeekerOff.png')}
                                />
                               :null}
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.setState({CameraHid:!this.state.CameraHid})}>
                                {this.state.CameraHid ==false?
                                <Image style={{width:20,height:20,alignItems:'center',justifyContent:'center'}} resizeMode='contain'
                                    source={require('../Images/Camera.png')}
                                />
                                :null}
                                {this.state.CameraHid?
                                <Image style={{width:20,height:20,alignItems:'center',justifyContent:'center'}} resizeMode='contain'
                                    source={require('../Images/CameraOff.png')}
                                />
                                :null}
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.setState({cameraSwitch:!this.state.cameraSwitch})}>
                                {this.state.cameraSwitch ==false?
                                <Image style={{width:20,height:20,alignItems:'center',justifyContent:'center'}} resizeMode='contain'
                                    source={require('../Images/RotateCamera.png')}
                                />
                                :null}
                                {this.state.cameraSwitch?
                                <Image style={{width:20,height:20,alignItems:'center',justifyContent:'center'}} resizeMode='contain'
                                    source={require('../Images/CameraSwitch.png')}
                                 />
                                :null}
                            </TouchableOpacity>
                        </View>
                        </ImageBackground>
                        
                    </View>
                    <View style={{marginTop:230}}>
                    <TouchableOpacity onPress={() => this.openClassBtn()}
                    style={{justifyContent:"center",alignItems:"center",alignSelf:"center",height:40,width:"40%",backgroundColor:"#DADADA",borderRadius:25}}>
                    <Text style={{alignSelf:'center'}}>클래스 개설 </Text>
                    </TouchableOpacity>
                    </View>
                   
                </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}
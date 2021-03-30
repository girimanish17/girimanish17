import React, { Component } from 'react';
//import type {Node} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class app extends Component{
    constructor(props){
        super(props)
        this.state={
            
        }
    }
    render(){
        return(
            <SafeAreaView style={styles.ContanarStyle}>
                <View style={styles.SubClassContanor}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('SocialVideo')}>
                        <Image style={styles.ImageStyle}
                            source={require('../../Images/SmilIcon.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('ChatScreen')}>
                        <Image style={styles.ImageStyle}
                            source={require('../../Images/ChatIcon.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('VideoScreen')}>
                        <Image style={styles.ImageStyle}
                            source={require('../../Images/VideoIcon.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('SideMenu')}>
                        <Image style={styles.ImageStyle}
                            source={require('../../Images/MenuIcon.png')}
                        />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    ContanarStyle:{
        backgroundColor:'#DADADA'
    },
    SubClassContanor:{
        flexDirection:'row',
        marginTop:10,
        marginBottom:10,
        alignItems:'center',
        justifyContent:'space-around',
        backgroundColor:'#DADADA'
    },
    ImageStyle:{
        width:20,
        height:20
    }
  });
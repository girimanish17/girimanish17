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

export default class LoginAgree extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
            <SafeAreaView style={styles.ContanarStyle}>
            <ScrollView>
                <View>
                    <Text style={styles.HeaderText}>씨클</Text>
                    <View style={styles.SubClassContanor}>
                        <View style={styles.LocalClass}>
                            <Text style={styles.TextStyle}>씨클</Text>
                            <View style={styles.LineView}></View>
                            <View style={styles.ButtonViewStyle}>
                                <TouchableOpacity style={styles.ButtonStyle} onPress={()=>this.props.navigation.navigate('TeamCondition')}>
                                    <Text style={styles.ButtonText}>동의하고 계속하기</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    ContanarStyle:{
        backgroundColor:'#E2E2E2',
        width:'100%',
        height:'100%'
    },
    SubClassContanor:{
        width:'90%',
        marginTop:100,
        alignSelf:'center',
        height:'100%'
    },
    HeaderText:{
        fontSize:18,
        marginLeft:20,
        marginTop:20,
        fontWeight:'700'
    },
    LocalClass:{
        width:'100%',
        alignSelf:'center',
        borderRadius:13,
        backgroundColor:'white'
    },
    TextStyle:{
        fontSize:18,
        marginLeft:40,
        marginTop:20,
        fontWeight:'600'
    },
    ButtonText:{
        fontSize:16,
        fontWeight:'600'
    },
    ButtonStyle:{
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        backgroundColor:'#F5F5F5',
        height:65
    },
    LineView:{
        borderBottomWidth:2,
        borderColor:'#DADADA',
        width:'90%',
        marginTop:20,
        alignSelf:'center'
    },
    ButtonViewStyle:{
        marginTop:'95%',
        alignSelf:'center',
        width:'100%'
    }
  });
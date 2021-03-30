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
  ImageBackground,
  TextInput
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import PublicSeekl from "./ChatComponent/PublicSeekl";
import FrinedSeekl from './ChatComponent/FrinedSeekl';

export default class App extends Component{
    constructor(props){
        super(props)
        this.state={
            ClassSelect:1
        }
    }
    render(){
        return(
            <SafeAreaView style={{flex:1,width:'100%',height:'100%',backgroundColor:'white'}}>
                <View style={{width:'92%',alignSelf:'center',height:'100%'}}>
                    <View style ={{flexDirection:'row',width:'100%',marginTop:10,justifyContent:'space-between'}}>
                        <Text style={{fontSize:18,fontWeight:'700'}}>씨클</Text>
                        <TouchableOpacity>
                            <Image style={{width:16,height:16}}
                                source={require('../Images/AddIcon.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row',marginTop:25}}>
                        <TouchableOpacity style={{borderBottomWidth:this.state.ClassSelect ==1?1:0,borderColor:this.state.ClassSelect ==1?'#2A9D8F':'',padding:5}}onPress={()=>this.setState({ClassSelect:1})}>
                           <Text style={{fontSize:18,fontWeight:'700',color:this.state.ClassSelect ==1?'#2A9D8F':'#979797'}}>공개씨클</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginLeft:33,borderBottomWidth:this.state.ClassSelect ==2?1:0,borderColor:this.state.ClassSelect ==2?'#2A9D8F':'',padding:5}} onPress={()=>this.setState({ClassSelect:2})}>
                            <Text style={{fontSize:18,fontWeight:'700',color:this.state.ClassSelect ==2?'#2A9D8F':'#979797'}}>친구</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginTop:10}}>
                        <TextInput style={{width:'90%',height:37,borderWidth:1,borderRadius:10,paddingLeft:11}}
                            placeholder="#영어"
                        />
                    </View>
                    <View style={{width:'100%',height:'78.5%',}}>
                        {this.state.ClassSelect ==1?
                        <PublicSeekl />
                        :null}
                        {this.state.ClassSelect ==2?
                        <FrinedSeekl/>
                        :null}
                         {/* <PublicSeekl /> */}
                         
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    Hedertext:{
        alignSelf:'center',
        marginRight:20,
        fontSize:18,
        fontWeight:'600'}
  });
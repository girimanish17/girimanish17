import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  Switch,
  TextInput} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

  export default class App extends Component{
      constructor(props){
          super(props)
          this.state={
            isEnabled:false
          }
      }
      ValuchangFun(){
          this.setState({isEnabled:!this.state.isEnabled})
      }
      render(){
          return(
              <SafeAreaView>
                  <ScrollView>
                      <View style={{width:'90%',alignSelf:'center'}}>
                        <View style={{flexDirection:'row',width:'100%',marginTop:16}}>
                            <TouchableOpacity onPress={()=>this.props.navigation.pop()}>
                                <Image style={{width:20,height:20}}
                                    source={require('../../../Images/right_Arrow.png')}  />
                            </TouchableOpacity>
                            <View style={{alignSelf:'center',width:'100%'}}>
                                <Text style={styles.Hedertext}>약관 동의</Text>
                            </View>
                        </View>
                        <View style={{alignSelf:'center',width:'100%',alignItems:'center',marginTop:20}}>
                            <Image style={{width:140,height:140,borderRadius:70,overflow:'hidden'}} resizeMode='cover'
                            source={require('../../../Images/KhargoshImage.png')}
                            />
                                <View style={{position:'absolute',marginTop:80}}>
                                <TouchableOpacity style={{width:48,height:48,marginLeft:70,alignSelf:'flex-end',backgroundColor:'#DADADA',borderRadius:24,alignItems:'center',justifyContent:'center'}}>
                                    <Image style={{width:24,height:18,tintColor:'black'}} resizeMode='cover'
                                       source={require('../../../Images/Camera.png')}
                                    />
                                </TouchableOpacity>
                                </View>
                            {/* </ImageBackground> */}
                        </View>
                        <View style={{flexDirection:'row',width:'100%',marginTop:25,marginLeft:10,alignItems:'center'}}>
                            <Text style={{fontSize:14,fontWeight:'700',color:'#979797'}}>닉네임</Text>
                            <TextInput style={{width:'70%',height:44,fontSize:14,fontWeight:'500',marginLeft:30,borderWidth:1,borderRadius:10,padding:5}}
                              placeholder='영씹남99'
                              onChangeText={(text)=>this.setState({Name:text})}
                            />
                        </View>
                        <View style={{flexDirection:'row',width:'100%',alignItems:'center',marginTop:25,marginLeft:10}}>
                            <Text style={{fontSize:14,fontWeight:'700',color:'#979797'}}>태어난 해</Text>
                            <TextInput style={{width:'70%',height:44,fontSize:14,fontWeight:'500',marginLeft:15,borderWidth:1,borderRadius:10,padding:5}}
                              placeholder='1990'
                              onChangeText={(text)=>this.setState({Name:text})}
                            />
                        </View>
                        <View style={{flexDirection:'row',width:'100%',alignItems:'center',marginTop:25,marginLeft:10}}>
                            <Text style={{fontSize:14,fontWeight:'700',color:'#979797'}}>성별</Text>
                            <TextInput style={{width:'70%',fontSize:14,fontWeight:'500',height:44,marginLeft:40,borderWidth:1,borderRadius:10,padding:5}}
                              placeholder='여성'
                              onChangeText={(text)=>this.setState({Name:text})}
                            />
                        </View>
                        <View style={{flexDirection:'row',width:'90%',justifyContent:'space-between',marginLeft:10,marginTop:20,alignItems:'center'}}>
                            <Text style={{fontSize:14,fontWeight:'700',color:'#979797'}}>공개여부</Text>
                            <View style={{flexDirection:'row',width:'40%',justifyContent:'space-around',alignItems:'center'}}>
                                <Text style={{fontSize:18,fontWeight:'700',color:'#666666'}}>공개</Text>
                                <Switch
                                    trackColor={{ false: "#767577", true: "#34C759" }}
                                    thumbColor={this.state.isEnabled ? "white" : "#f4f3f4"}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange = {()=>this.setState({isEnabled:!this.state.isEnabled})}
                                   // onValueChange={this.setState({isEnabled:true})}
                                    value={this.state.isEnabled}
                                />
                            </View>
                        </View>
                        <View style={{alignSelf:'center',width:'100%',marginTop:'30%',alignItems:'center'}}>
                        <TouchableOpacity style={{width:160,height:37,alignItems:'center',justifyContent:'center',borderRadius:18,backgroundColor:'#2A9D8F'}}
                            onPress={()=>console.log('')} >
                            <Text style={{fontSize:14,fontWeight:'600',color:'white'}}>동의</Text>
                        </TouchableOpacity>
                    </View>
                      </View>
                  </ScrollView>
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
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

  export default class App extends Component{
      constructor(props){
          super(props)
          this.state={
              ArrayData:[1,2,3]
          }
      }
      render(){
          return(
              <SafeAreaView style={{flex:1}}>
                  {/* <ScrollView> */}
                      <View style={styles.SubClass}>
                        <View style={{flexDirection:'row',width:'100%'}}>
                            <TouchableOpacity onPress={()=>this.props.navigation.pop()}>
                            <Image style={{width:20,height:20}}
                                source={require('../../Images/right_Arrow.png')}  />
                            </TouchableOpacity>
                            <View style={{alignSelf:'center',width:'100%'}}>
                              <Text style={styles.Hedertext}>약관 동의</Text>
                              <Text style={{fontSize:36,marginTop:30,alignSelf:'center',fontWeight:'600'}}>SEEKL</Text>
                              <Text style={{marginTop:10,alignSelf:'center',fontSize:14,fontWeight:'400'}}>씨클에 오신 것을 환영합니다.</Text>
                            </View>
                        </View>
                        <View style={{marginTop:50}}>
                            <FlatList scrollEnabled={false}
                                data={this.state.ArrayData}
                                renderItem={({item})=>
                                <View style={{marginTop:'5%'}}>
                                    <TouchableOpacity style={{flexDirection:'row',width:'90%'}}>
                                        <View style={{width:25,alignItems:'center',justifyContent:'center',height:25,borderRadius:12.5,backgroundColor:'black'}}>
                                            <Image style={{width:15,height:15,tintColor:'white'}}
                                                source={require('../../Images/rightVectorIcon.png')}
                                            />
                                        </View>
                                        <View style={{flexDirection:'row',alignItems:'center',marginLeft:20,justifyContent:'space-between',width:'100%'}}>
                                            <Text style={{fontSize:14,fontWeight:'600'}}>[필수] 서비스 이용약관 동의</Text>
                                            <Text style={{fontSize:14,fontWeight:'600',color:'#979797'}}>보기</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            }
                            />
                        </View>
                        <View style={{width:'90%',marginTop:'8%',alignSelf:'center',borderWidth:1,backgroundColor:'#979797'}}></View>
                        <TouchableOpacity style={{flexDirection:'row',marginTop:'10%',width:'90%'}}>
                            <View style={{width:25,alignItems:'center',justifyContent:'center',height:25,borderRadius:12.5,backgroundColor:'black'}}>
                                <Image style={{width:15,height:15,tintColor:'white'}}
                                    source={require('../../Images/rightVectorIcon.png')}
                                />
                            </View>
                            <View style={{flexDirection:'row',alignItems:'center',marginLeft:20,justifyContent:'space-between',width:'100%'}}>
                                <Text style={{fontSize:14,fontWeight:'600'}}>[필수] 서비스 이용약관 동의</Text>
                                <Text style={{fontSize:14,fontWeight:'600',color:'#979797'}}>보기</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{alignSelf:'center',marginTop:'60%'}}>
                            <TouchableOpacity style={{width:160,height:40,borderRadius:20,alignItems:'center',justifyContent:'center',backgroundColor:'#2A9D8F'}}
                            onPress={()=>this.props.navigation.navigate('TeamsForm')} >
                                <Text style={{fontSize:14,color:'white',fontWeight:'600'}}>다음</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                  {/* </ScrollView> */}
              </SafeAreaView>
          )
      }
  }
  const styles = StyleSheet.create({
    SubClass:{
        width:'90%',
        alignSelf:'center',
        marginTop:10
    },
    Hedertext:{
        alignSelf:'center',
        marginRight:20,
        fontSize:18,
        fontWeight:'600'}
  });
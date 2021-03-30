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
  TextInput,
  FlatList
} from 'react-native';

export default class App extends Component{
    constructor(props){
        super(props)
        this.state={
            DataArray:[1,2,3,4,5,6,7,8,9]
        }
    }
    render(){
        return(
            <SafeAreaView  style={{width:'100%',height:'100%'}}>
                <View style={{width:'100%',height:'100%'}}>
                    <View style={{flexDirection:'row',height:20,width:'80%',justifyContent:'space-between',marginTop:10}}>
                        <TouchableOpacity>
                            <Text style={{fontSize:14,fontWeight:'700'}}>#영어</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{fontSize:14,fontWeight:'500',color:'#666666'}}>#독서</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{fontSize:14,fontWeight:'500',color:'#666666'}}>#시사</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{fontSize:14,fontWeight:'500',color:'#666666'}}>#중국어</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{fontSize:14,fontWeight:'500',color:'#666666'}}>#영화</Text>
                        </TouchableOpacity>
                    </View>
                    <View  style={{width:'100%',marginTop:5,marginBottom:30,backgroundColor:'white'}}>
                        <FlatList showsVerticalScrollIndicator={false}
                            data={this.state.DataArray}
                            renderItem={({item})=><View>
                                <TouchableOpacity style={{width:"95%",flexDirection:'row',alignItems:'center',marginTop:10,elevation:5,alignSelf:'center',height:81,borderRadius:10,backgroundColor:'#F6F6F6'}}>
                                    <Image style={{width:50,height:50,borderRadius:25,marginLeft:10}}
                                        source={require('../../Images/KhargoshImage.png')}
                                    />
                                    <View style={{marginLeft:20,width:'60%'}}>
                                        <Text style={{fontSize:12,fontWeight:'700'}}>영어 스피킹 레벨 1 - 20대 직장인반</Text>
                                        <Text style={{fontSize:12,fontWeight:'700'}}>영씹남99</Text>
                                        <View style={{flexDirection:'row'}}>
                                            <Text style={{fontSize:12,fontWeight:'700'}}>[2/6]</Text>
                                            <Text style={{marginLeft:10,fontWeight:'400',fontSize:12}}>월, 수, 금 15:30</Text>
                                        </View>
                                        <Text style={{fontSize:10,marginTop:5,fontWeight:'400',color:'#666666'}}>#영어 # 20대 #초급 # 직장인</Text>
                                    </View>
                                    <View style={{alignItems:'center',marginRight:10}}>
                                        <TouchableOpacity>
                                            <Image style={{width:16,height:16}}
                                                source={require('../../Images/AddIcon.png')}
                                            />
                                        </TouchableOpacity>
                                        <Text style={{marginTop:5,fontSize:12,fontWeight:'500'}}>가입요청</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>}
                        />
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}
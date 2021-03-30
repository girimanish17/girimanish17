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
            DataArray:[1,2,3,4,5,6,7,8,9,10,11,12],
            userOnline:true
        }
    }
    render(){
        return(
            <SafeAreaView style={{width:'100%',height:'100%',backgroundColor:'white'}}>
                <View style={{marginTop:10,width:'100%',height:'100%',marginBottom:20}}>
                <View  style={{width:'100%',height:'96%'}}>
                        <FlatList showsVerticalScrollIndicator={false}
                            data={this.state.DataArray}
                            renderItem={({item})=><View>
                                <TouchableOpacity style={{width:"95%",flexDirection:'row',alignItems:'center',marginTop:10,alignSelf:'center',borderColor:'#C4C4C4',borderBottomWidth:0.5,height:79,borderRadius:10,backgroundColor:'#F6F6F6'}}>
                                    <View>
                                    <View style={{width:10,height:10,alignSelf:'flex-end',borderRadius:10,position:'absolute',backgroundColor:this.state.userOnline?'#2A9D8F':'#C4C4C4'}}></View>
                                    <Image style={{width:50,height:50,borderRadius:25,marginLeft:10,marginTop:5}}
                                        source={require('../../Images/KhargoshImage.png')}
                                    />
                                    </View>
                                    <View style={{marginLeft:20}}>
                                        <Text style={{fontSize:14,fontWeight:'700'}}>영씹남99</Text>
                                    </View>
                                    {/* <View style={{marginLeft:20,width:'60%'}}>
                                        <Text style={{fontSize:12,fontWeight:'700'}}>영어 스피킹 레벨 1 - 20대 직장인반</Text>
                                        <Text style={{fontSize:12,fontWeight:'700'}}>영씹남99</Text>
                                        <View style={{flexDirection:'row'}}>
                                            <Text style={{fontSize:12,fontWeight:'700'}}>[2/6]</Text>
                                            <Text style={{marginLeft:10,fontWeight:'400',fontSize:12}}>월, 수, 금 15:30</Text>
                                        </View>
                                        <Text style={{fontSize:10,marginTop:5,fontWeight:'400',color:'#666666'}}>#영어 # 20대 #초급 # 직장인</Text>
                                    </View>
                                    <View style={{alignItems:'center'}}>
                                        <TouchableOpacity>
                                            <Image style={{width:16,height:16}}
                                                source={require('../../Images/AddIcon.png')}
                                            />
                                        </TouchableOpacity>
                                        <Text style={{marginTop:5,fontSize:12,fontWeight:'500'}}>가입요청</Text>
                                    </View> */}
                                </TouchableOpacity>
                            </View>}
                        />
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}
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
import { call } from 'react-native-reanimated';

  export default class App extends Component{
      constructor(props){
          super(props)
          this.state={

          }
      }
      render(){
          return(
              <SafeAreaView>
                  <View style={{width:'90%',alignSelf:'center'}}>
                    <View style={{flexDirection:'row',width:'100%',marginTop:16}}>
                        <TouchableOpacity onPress={()=>this.props.navigation.pop()}>
                            <Image style={{width:20,height:20}}
                                source={require('../../Images/right_Arrow.png')}  />
                        </TouchableOpacity>
                        <View style={{alignSelf:'center',width:'100%'}}>
                            <Text style={styles.Hedertext}>[필수] 서비스 이용약관</Text>
                            {/* <Text style={{fontSize:36,marginTop:30,alignSelf:'center',fontWeight:'600'}}>SEEKL</Text>
                            <Text style={{marginTop:10,alignSelf:'center',fontSize:14,fontWeight:'400'}}>씨클에 오신 것을 환영합니다.</Text> */}
                        </View>
                    </View>
                    <View style={{marginTop:'10%'}}>
                        <ScrollView>
                            <View style={{width:'90%',flex:1,alignSelf:'center'}}>
                            <Text style={{fontSize:14,fontWeight:'400',lineHeight:17}}>개인정보 보유 및 이용기간
1) 본 약관은 “서비스”를 이용하기 위해 “고객”이 웹사이트 또는 모바일 앱에 접속하여 약관내용에 동의를 한 다음 회원가입신청을 하여 회사가 이를 승인함으로써 효력을 발휘합니다.
2) “회사”는 본 약관의 내용을 “고객”이 쉽게 알 수 있도록 서비스 초기화면에 게시합니다.
3) “회사”는 새로운 “서비스”의 적용, 보안체계의 향상 및 유지, 정부 등 공공기관에 의한 시정명령의 이행, “회사”가 제공하는 새로운 “서비스”의 적용, 기타 “회사”의 업무상 중대한 사유에 의하여 약관을 변경하여야 할 필요가 있다고 판단 될 경우 관계법령을 위반 하지 않는 범위 내에서 본 약관을 개정할 수 있습니다.
4) “회사”는 본 약관을 개정하는 경우, 개정 약관의 적용일자 및 개정사유를 명시하여 현행약관과 함께 “서비스”의 초기화면 에 게시하는 방법으로 “고객”이 사전에 인지할 수 있도록 약관적용 7일 전부터 적용 전일까지 공지합니다.
5) “고객”이 개정 약관의 적용에 동의하지 않는 경우, 개정 약관 적용 전일까지 “서비스” 회원에서 탈퇴할 수 있습니다. “고객”이 그러한 조치를 취하지 않은 경우 개정 약관의 적용에 동의한 것으로 봅니다.
6) “고객”이 책임질 수 없는 사정(개정 약관에 관한 공지 기간 동안 “서비스”에 접속하지 않았다는 사정은 ‘책임질 수 없는 사정’에 해당하지 않는 것으로 합니다.)으로 전항의 회원 탈퇴 조치를 취하지 못한 경우, 그러한 사정을 입증하여 ‘책임질 수 없는 사정’이 소멸한 즉시 회원 탈퇴 조치를 취할 수 있습니다.</Text>
                            </View>
                        </ScrollView>
                    </View>
                    <View style={{alignSelf:'center',width:'100%',marginTop:'30%',alignItems:'center'}}>
                        <TouchableOpacity style={{width:160,height:37,alignItems:'center',justifyContent:'center',borderRadius:18,backgroundColor:'#2A9D8F'}}
                            onPress={()=>this.props.navigation.navigate('SignupInfo')} >
                            <Text style={{fontSize:14,fontWeight:'600',color:'white'}}>동의</Text>
                        </TouchableOpacity>
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
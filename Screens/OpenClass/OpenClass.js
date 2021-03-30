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
                                source={require('../../../Images/right_Arrow.png')}  />
                        </TouchableOpacity>
                        <View style={{alignSelf:'center',width:'100%'}}>
                            <Text style={styles.Hedertext}>약관 동의</Text>
                        </View>
                    </View>
                  </View>
              </SafeAreaView>
          )
      }
  }
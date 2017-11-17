import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import {Container, Content, Header, Form, Item, Input, Label , Button, Icon, } from 'native-base';
import styles from './ChangePasswordStyle';
import { ApplicationStyles, Colors, Metrics, Images } from '../../theme';



export default class ChangePassword extends Component {
    render(){
        return(
       
        <View style={styles.container}>
            <Content>
            <View style={{flex:1, marginTop:40}}>
              <Text>Set Password</Text>
              </View>
              <View style={{ flex:1, marginTop:20}}>
          <Item>
          <Image source={Images.lockgreen}/>
            <Input placeholder="Old Password" placeholderTextColor={'#A3A3A3'} secureTextEntry={true}/>
          </Item>
          
          <Item>
          <Image source={Images.lockgreen}/>
            <Input  placeholder="New Password"  placeholderTextColor={'#A3A3A3'} secureTextEntry={true} />
          </Item>
          <Item >
          <Image source={Images.lockgreen}/>
            <Input  placeholder="Confirm Password"  placeholderTextColor={'#A3A3A3'} secureTextEntry={true} />
          </Item>
          </View>

          <View style={{flex:1, marginTop:Metrics.screenHeight/4}}>
        <Button rounded style={{width:Metrics.screenWidth/1.4, marginTop:50,justifyContent:"center",alignItems:"center",backgroundColor:"#8CB102",}}>
            <Text style={{color:"white",fontSize:18}}>SUBMIT</Text>
          </Button>
          </View>
          </Content>
      </View>
     
      
        
    
    );
  }
}
    
 
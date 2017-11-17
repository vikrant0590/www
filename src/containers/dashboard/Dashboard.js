import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import {Container, Content, Header, Form, Item, Input, Label , Button,} from 'native-base';
import styles from './DashboardStyles';
import { Actions as NavActions } from 'react-native-router-flux';

import { ApplicationStyles, Colors, Metrics, Images } from '../../theme';

export default class Dashboard extends Component {
    render(){
      var video = [];
      for(let i = 0; i < 6; i++){
        video.push(
          <View style={{ flexDirection:"column", }}>
        
            <View style={{height:Metrics.screenHeight/6,flexDirection:'row',
            marginLeft:12,marginRight:12,marginTop:12,}}>
               <View style={{flex:0.45, borderColor:'green', borderWidth:2}}>
               
                 
               </View>    
            

              <View style={{flex:0.55, flexDirection:'column', marginLeft:Metrics.screenWidth/40}}>
                  <View  style={{alignItems:'flex-start',marginTop:Metrics.screenHeight/120, }}>
                     <Text style={{color:'#333333', fontSize:13}}>Training Video 1 </Text>
                  </View>

                  <View style={{ marginTop:Metrics.screenHeight/140}}>
                     <Text style={{color:'#878787', fontSize:9}}>Sed ut perspiciatis unde omins iste natus error sit voluptatem accusantitum dolor- emque laudantium...</Text>
                  </View>  

                  <View style={{  marginTop:Metrics.screenHeight/90}}>
                  <TouchableOpacity style={{flexDirection:'row',}} onPress={NavActions.dashboarddetail}>
                  <Image source={Images.viewdetail} style={{marginRight:Metrics.screenWidth/60}}/>
                  <Text style={{fontSize:9, color:'#333333'}}>View Detail</Text>
                  </TouchableOpacity>

                  </View>  

                 
              </View>
          </View>

            <View style={{marginTop:12,height:1, backgroundColor:'#878787'}}>

            </View>
         </View>
        )
      }
  
        return(
          <Content>
        <View style={{marginTop:Metrics.navBarHeight, flex:1, }}>
         { video}
      </View>
      </Content>
      
        
    
    );
  }
}
    
 
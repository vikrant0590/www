'use strict';
import React, {
  Component
} from 'react';

import {
  AlertIOS,
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image
} from 'react-native';
import styles from './DashboardDetailStyles';
import Video from 'react-native-video';
import { ApplicationStyles, Colors, Metrics, Images } from '../../theme';
import VideoPlayer from 'react-native-video-player';



export default class DashboardDetail extends Component { 

    render() {
        return (
          <View style={{flex:1, flexDirection:'column', marginBottom:Metrics.screenHeight/30}}>

      <View style={{flex:0.44,}}>
            <VideoPlayer
                  pauseOnPress
                 
              //endWithThumbnail
              //thumbnail={{ uri: this.state.thumbnailUrl }}
              video={{ uri:  'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'  }}
              //videoWidth={this.state.video.width}
             // videoHeight={this.state.video.height}
              //duration={this.state.video.duration/* I'm using a hls stream here, react-native-video
                //can't figure out the length, so I pass it here from the vimeo config */}
            />
            </View>

             
              <View style={{
              
                 flex:0.40, 
                 flexDirection:"column",
                  marginLeft:Metrics.screenWidth/20,
                  marginRight:Metrics.screenWidth/20,
                 marginTop:-Metrics.screenHeight/8,
                  }}>
               <Text style={{fontSize:17}}> Training Video 1</Text>
            
               <Text style={{color:'#878787', fontSize:10,marginTop:Metrics.screenHeight/50,}}>
               Lorem Ipsum is simply dummy text of the printing and typesetting industry.
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
               It has survived not only five centuries. It was popularised in 
               the 1960s with the release of Letraset sheets containing Lorem Ipsum passages. {'\n\n'}
                and more recently with desktop publishing software like Aldus PageMaker including 
                versions of Lorem Ipsum. Lorem Ipsum has been the industry's standard dummy text
                 ever since the 1500s.
               </Text>

            </View>  
          <View style={{flex:0.001, backgroundColor:'#878787'}}></View>


            <View style={{flex:0.15,
              marginLeft:Metrics.screenWidth/20,
                  marginRight:Metrics.screenWidth/20,
                  flexDirection:"column",
              
            }}>
               <View style={{ flex:1, flexDirection:'row', justifyContent:'center',alignItems:'center'}}>
                  
               </View>    

               <View style={{flex:1, justifyContent:'flex-end'}}>
               <TouchableOpacity  
                   style={{borderRadius:20,
                      height:35,
                      
                      //width:Metrics.screenWidth/1.2,
                   
                    justifyContent:"center",alignItems:"center",
                   backgroundColor:'#8CB102',
                   }}>
                   <Text style={{color:"white", fontSize:15}}>NEXT TRAINING VIDEO</Text>
                    
                   </TouchableOpacity>

               </View> 

          </View>
          </View>
        );
      }
    }
    
 
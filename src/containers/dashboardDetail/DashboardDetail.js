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
          <View>
            <Text style={{ fontSize: 22, marginTop: 22 }}>React Native Video Player</Text>
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
        );
      }
    }
    
 
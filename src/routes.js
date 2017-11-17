import React, { Component } from 'react';
import {Text, StyleSheet, View,  Stack} from 'react-native';
import {
    Login,
    Signup,
    ForgotPAssword,
    ChangePassword,
    Dashboard,
    TrackLead,
    Profile,
    Settings,
    NewLead,
    MyMoney,
    MyProfile,
    EditProfile,
    Faq,
    NeedHelp,
    TermsCondition,
    DashboardDetail
} from './containers';

 import {MenuLeftDrawer } from './components'

import {  Colors, Metrics, Images } from './theme';
import NavigationDrawer from './NavigationDrawer';
import { Router, Scene, Actions as NavigationActions } from 'react-native-router-flux';

const Styles = {
  container: {
    flex: 1
  },
  navBar: {
    backgroundColor: Colors.BaseColor,
    borderBottomWidth: 0,
  },
  dashboardNavBar: {
    flex:1,
    backgroundColor: Colors.background,
  },
  title: {
    color: Colors.snow
  },

  navTitle: {
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  
 

  titleTextStyle: {
    textAlign: 'center',
    color: Colors.white,
   // fontSize: Fonts.size.h6,
    //fontFamily: Fonts.Walkthrough.medium
  },

};


export default class AppRouter extends Component {
    render() {
       
    
        return (
          <Router
           navigationBarStyle={{backgroundColor:'#8CB102', borderBottomWidth: 0 }}
          
           drawerImage={Images.navDrawerIcon}
           hideNavBar={false}
           backButtonImage={Images.backwhite}
           
             >
             <Scene key="root" titleStyle={{ color:'white' }} barButtonIconStyle={{ resizeMode:'contain'}}>
            <Scene key="login" component={Login} hideNavBar={true}  initial={true} />
            <Scene key="tracklead"component={TrackLead} hideNavBar={false} title="TRACK LEAD" />
      
              <Scene key="settings"component={Settings} hideNavBar={false} title="SETTINGS"  />
              <Scene key="mymoney"component={MyMoney} hideNavBar={false} title="MONEY TRACK"  />
            <Scene key="signup" component={Signup} hideNavBar={false} title="SIGN UP"   />
            <Scene key="forgotPassword" component={ForgotPAssword} hideNavBar={false} title="FORGOT PASSWORD"/>
           <Scene key="changePassword" component={ChangePassword} hideNavBar={false} title="CHANGE PASSWORD" />
           <Scene key="myprofile" component={MyProfile} hideNavBar={false} title="MY PROFILE"/>
           <Scene key="editprofile" component={EditProfile} hideNavBar={false} title="EDIT PROFILE"/>
           <Scene key="newlead" component={NewLead} hideNavBar={false} title="NEW LEAD"  />
           <Scene key="faq" component={Faq} hideNavBar={false} title="FAQ" />
           <Scene key="help"component={NeedHelp} hideNavBar={false} title="NEED HELP?" />
           <Scene key="termsCondition" component={TermsCondition} hideNavBar={false} title="TERMS AND CONDITIONS"/>
           <Scene key="dashboarddetail"component={DashboardDetail} hideNavBar={true} />

           <Scene key="drawer" component={NavigationDrawer} type="replace" >
          <Scene key="drawerChildrenWrapper" titleStyle={{ color:'white' }}>
           <Scene key="dashboard" component={Dashboard} hideNavBar={false} title="DASHBOARD"   />

           </Scene>
           </Scene>
            </Scene>
            </Router>
    );
  }
}
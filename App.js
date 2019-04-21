import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {Header, Icon} from 'react-native-elements';
import {createAppContainer, createDrawerNavigator} from 'react-navigation';

const Hamburger = ({navigation}) => (
  <Icon color="white" name="menu" onPress={() => navigation.toggleDrawer()} />
);

const MyHeader = ({navigation, title}) => {
  return (
    <Header
      leftComponent={<Hamburger navigation={navigation} />}
      centerComponent={{
        text: title,
        style: {color: 'white', fontSize: 20, fontWeight: 'bold'}
      }}
      statusBarProps={{barStyle: 'light-content'}}
    />
  );
};

const getTitle = text => <Text style={styles.title}>{text}</Text>;

const About = ({navigation}) => (
  <View style={styles.container}>
    <MyHeader navigation={navigation} title="About" />
    {getTitle('About this app')}
  </View>
);
About.navigationOptions = {
  drawerIcon: <Icon name="info" />
};

const Home = ({navigation}) => (
  <View style={styles.container}>
    <MyHeader navigation={navigation} title="Home" />
    {getTitle('Home screen')}
  </View>
);
Home.navigationOptions = {
  drawerIcon: <Icon name="home" />
};

const Settings = ({navigation}) => (
  <View style={styles.container}>
    <MyHeader navigation={navigation} title="Settings" />
    {getTitle('Settings screen')}
  </View>
);
Settings.navigationOptions = {
  drawerIcon: <Icon name="settings" />
};

const drawerOptions = {
  initialRouteName: 'Home' //TODO: NOT WORKING!
};
const DrawerNav = createDrawerNavigator(
  {About, Home, Settings},
  {drawerOptions}
);

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 36,
    padding: 20
  }
});

export default createAppContainer(DrawerNav);

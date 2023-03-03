import React from 'react';
import { StyleSheet, View } from 'react-native'
import StyleText from './StyleText';
import Constants from 'expo-constants';
import theme from '../theme';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.AppBar.primary,
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 10,
    paddingLeft: 10 
  },
  text: {
    color: theme.AppBar.primaryText,
    paddingHorizontal: 10
  }
})

const AppBarTab = ({active, children, to}) => {
  return (
    <Link to={to}>
      <StyleText style={styles.text} fontWeight='bold'>
        {children}
      </StyleText>
    </Link>
  )
}

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab active to='/'>
        Repositories
      </AppBarTab>
      <AppBarTab active to='signin'>
        Sign In
      </AppBarTab>
    </View>
  )
}

export default AppBar
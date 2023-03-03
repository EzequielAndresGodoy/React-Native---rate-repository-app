import React from "react";
import Constants from "expo-constants";
import { Text, View } from "react-native";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import { Redirect, Route, Switch } from 'react-router-native'

const Main = () => {
  return (
    <View style={{marginTop: Constants.statusBarHeight, flexGrow: 1}}>
      <AppBar />
      <Switch>
        <Route path='/' exact>
          <RepositoryList />
        </Route>
        <Route path='/signin' exact>
          <Text>Woking on it</Text>
        </Route>
        <Redirect to='/' />
      </Switch>
    </View>
  )
}

export default Main
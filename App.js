import React from 'react';
import {StatusBar, SafeAreaView, ScrollView, View, Text,StyleSheet} from 'react-native';
import codePush from 'react-native-code-push';

const styles = StyleSheet.create({
  scrollView: {
    width: '100%',
  },
  body: {
    width: '100%',
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black'
  }
});

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <Text style={styles.titleText}>Test v26</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

let codePushOptions = { 
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  rollbackRetryOptions: {
    delayInHours: 0,
    maxRetryAttempts: 10
  }
};
// let codePushOptions = { installMode: codePush.InstallMode.IMMEDIATE };

export default codePush(codePushOptions)(App);

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
            <Text>Test v2</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default codePush(App);
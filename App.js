import codePush from 'react-native-code-push';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <Text>Test</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default codePush(App);
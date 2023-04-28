import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {CalculatorScreen} from './src/screens/CalculatorScreen';
import {styles} from './src/theme/appTheme';

/*
  New component in code:
  <StatusBar backgroundColor={'black'} />

  === Can change the propieties of statusbar in the phone ===

*/

const App = () => {
  return (
    <SafeAreaView style={styles.backgroundApp}>
      <StatusBar backgroundColor={'black'} />
      <CalculatorScreen />
    </SafeAreaView>
  );
};

export default App;

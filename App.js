import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ForgotPassword from './ForgotPassword';
import Verification  from './Verification';

const App=() => {
  return (
    <View >
      <ForgotPassword/>
      <View>
        <Verification/>
      </View>
    </View>

  );
};

export default App;

import React from "react";
import { View, Text, SafeAreaView, StyleSheet, useColorScheme } from "react-native";

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
      <View style={style.container}>
        <Text style={isDarkMode? style.whiteText:style.darkText}>Hello World! This is Alisha Jain</Text>
      </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  whiteText:{
    color: '#ffffff'
  },
  darkText: {
    color: '#000000'
  }
})

export default App;
import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import { StatusBarComponent } from './src/components/StatusBarComponent'
export const App = () => {
  return (
    <SafeAreaView style={stylesStatus.container}>
      <StatusBar
        hidden={false}
        animated={true}
      />
        <StatusBarComponent/>  
    </SafeAreaView>
    
  )
}
const stylesStatus = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ECF0F1'
  },
  buttonsContainer: {
    padding: 10
  },
  textStyle: {
    textAlign: 'center',
    marginBottom: 8
  }
});
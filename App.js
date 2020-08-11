import React, { Component } from 'react';
import { Button, View, Text, Alert } from 'react-native';



import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

class RedButton extends Component{
  render(){
    return(
      <Button 
      title= "Sound1" 
      color = "blue">
      onPress{() => Alert.alert('play Sound1')}
      </Button> 

    
    )
  }
}
export default class App extends Component {
  render() {
    return (
      <View>
            <Button 
      title= "Sound1" 
      color = "blue">
      onPress{() => Alert.alert('play Sound1')}
      </Button> 

      <Button 
      title= "Sound2" 
      color = "purple">
      onPress{() => Alert.alert('play Sound1')}
      </Button> 

      <Button 
      title= "Sound3" 
      color = "orange">
      onPress{() => Alert.alert('play Sound1')}
      </Button> 

      <Button 
      title= "Sound4" 
      color = "green">
      onPress{() => Alert.alert('play Sound1')}
      </Button> 

    
      <Button 
      title= "Sound5" 
      color = "red">
      onPress{() => Alert.alert('play Sound1')}
     </Button>
  </View>
    )
  }
}
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Cam({navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      
      <Camera style={styles.camera} type={type}>
        
        <View style={styles.buttonContainer}>
          
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.goBack()}>
            <Ionicons name='chevron-back-sharp' size={30} color={'white'}/>
          </TouchableOpacity>

        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    marginBottom: 70,
    marginLeft: 30
  },
  button: {
    marginTop: 60,
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});
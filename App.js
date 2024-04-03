import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';
import CalendarModule from './CalendarModule';
import { useEffect, useState } from 'react';


export default function App() {
  const [error, setError] = useState('')
  const [deviceId, setDeviceId] = useState('')
  const [deviceAttribute, setDeviceAttribute] = useState('')

  useEffect(() => {
    CalendarModule.getDeviceID(
      deviceId => {
        setDeviceId(deviceId)
      },
      error => {
        setError(error)
      }
    )
  }, [])

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Text>DeviceId: {deviceId}</Text>
      <Text style={{ color: 'red' }}>{error}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

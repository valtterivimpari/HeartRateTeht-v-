import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [age, setAge] = useState(null);
  const [lowerLimit, setLowerLimit] = useState(null);
  const [upperLimit, setUpperLimit] = useState(null);

  function calculate() {
    const result = 220 - age;
    const lower = result * 0.65;
    const upper = result * 0.85;
    setLowerLimit(lower.toFixed(0)); 
    setUpperLimit(upper.toFixed(0)); 
  }

  return (
    <View style={styles.container}>

      <Text style={styles.field}>Age</Text>
      <TextInput
        keyboardType='numeric'
        onChangeText={text => setAge(parseFloat(text))}
      />
      <Text style={styles.field}>Limits</Text>
      <Text style={styles.field}>{lowerLimit} - {upperLimit}</Text>
      <Button onPress={calculate} title="Calculate"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginLeft: 10,
  },
  field: {
    marginBottom: 10,
  }
});

import React, { useState } from 'react';
import { View, Text, TextInput, Button, Switch } from 'react-native';
import { BasicStyle, FancyStyle } from './styles';
import { RadioButton } from 'react-native-paper';
import NumericInput from 'react-native-numeric-input';

export default function App() {
  const [fancy, setFancy] = useState(true);
  const [isEnabled, setIsEnabled] = useState();
  const currentStyle = fancy ? FancyStyle : BasicStyle;



  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState('male');
  const [alco, setAlco] = useState(0);

  const laske = () => {
    let tulos = 0;
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10;
    let gramsLeft = grams - burning * time;

    if (gender === 'male') {
      tulos = gramsLeft / (weight * 0.7);
    } else if (gender === 'female') {
      tulos = gramsLeft / (weight * 0.6);
    }

    if (tulos >= 0) {
      setAlco(tulos.toFixed(1));
    } else {
      setAlco('0');
    }
  };

  return (
    <View style={currentStyle.container}>
      <View>
        <Switch
          value={isEnabled}
          onValueChange={() => setFancy(!fancy)}
          onChange={() => setIsEnabled(prev => !prev)}
          thumbColor={isEnabled ? BasicStyle.thumbEnabledColor : BasicStyle.thumbDisabledColor}
        />


      </View>
      <View style={currentStyle.textRow}>
        <Text style={currentStyle.header}>Alcometer</Text>
        <View>
          <Text style={currentStyle.texts}>Weight</Text>
          <TextInput
            value={weight.toString()}
            style={{ padding: 5 }}
            onChangeText={(text) => setWeight(text)}
            keyboardType="numeric"
          />
        </View>
        <View>
          <Text style={currentStyle.texts}>Bottles</Text>
          <NumericInput
            value={bottles}
            onChange={(value) => setBottles(value)}
            rounded={true}
            totalWidth={150}
            totalHeight={40}
            minValue={0}
            step={1}
          />
        </View>
        <View>
          <Text style={currentStyle.texts}>Hours</Text>
          <NumericInput
            value={time}
            rounded={true}
            onChange={(value) => setTime(value)}
            totalWidth={150}
            totalHeight={40}
            minValue={0}
            step={1}
          />
        </View>
        <View>

          <RadioButton.Group
            onValueChange={(value) => setGender(value)}
            value={gender}
          >
            <View>
              <Text style={currentStyle.texts}>Male</Text>
              <RadioButton value="male" />
            </View>
            <View>
              <Text style={currentStyle.texts}>Female</Text>
              <RadioButton value="female" />
            </View>
          </RadioButton.Group>
        </View>
        <Text style={currentStyle.textTulos}>{alco}</Text>
        <View>
          <Button title="Calculate" onPress={laske} />
        </View>
      </View >
    </View >
  );
}
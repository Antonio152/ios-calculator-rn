import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../theme/appTheme';
interface ICalculatorButtonProps {
  text: string;
  color?: string;
  textColor?: string;
  bigBtn?: boolean;
  action: (numeroTexto: string) => void;
}

export const ButtonCalc = ({
  text,
  color = '#A5A5A5',
  textColor = '#fff',
  bigBtn = false,
  action,
}: ICalculatorButtonProps) => {
  return (
    <TouchableOpacity onPress={() => action(text)}>
      <View
        style={{
          ...styles.button,
          backgroundColor: color,
          width: bigBtn ? 180 : 80,
        }}>
        <Text style={{...styles.buttonText, color: textColor}}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

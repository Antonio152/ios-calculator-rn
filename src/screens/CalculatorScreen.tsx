import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {ButtonCalc} from '../components/ButtonCalc';
import {useCalculator} from '../hooks/useCalculator';

export const CalculatorScreen = () => {
  const {
    number,
    lastNumber,
    cleanValue,
    positiveNegative,
    btnDel,
    btnDivide,
    handleOperation,
    btnMultiply,
    btnRest,
    btnSum,
    calculateOperation,
  } = useCalculator();
  return (
    <View style={styles.calculadoraContainer}>
      {lastNumber !== '0' && <Text style={styles.smallRes}>{lastNumber}</Text>}
      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>
      {/* Buttons */}
      <View style={styles.filaBtns}>
        <ButtonCalc text="C" textColor="#000" action={cleanValue} />
        <ButtonCalc text="+/-" textColor="#000" action={positiveNegative} />
        <ButtonCalc text="del" textColor="#000" action={btnDel} />
        <ButtonCalc text="/" color="#FEA00A" action={btnDivide} />
      </View>
      {/* Buttons */}
      <View style={styles.filaBtns}>
        <ButtonCalc text="7" color="#333333" action={handleOperation} />
        <ButtonCalc text="8" color="#333333" action={handleOperation} />
        <ButtonCalc text="9" color="#333333" action={handleOperation} />
        <ButtonCalc text="x" color="#FEA00A" action={btnMultiply} />
      </View>
      {/* Buttons */}
      <View style={styles.filaBtns}>
        <ButtonCalc text="4" color="#333333" action={handleOperation} />
        <ButtonCalc text="5" color="#333333" action={handleOperation} />
        <ButtonCalc text="6" color="#333333" action={handleOperation} />
        <ButtonCalc text="-" color="#FEA00A" action={btnRest} />
      </View>
      {/* Buttons */}
      <View style={styles.filaBtns}>
        <ButtonCalc text="1" color="#333333" action={handleOperation} />
        <ButtonCalc text="2" color="#333333" action={handleOperation} />
        <ButtonCalc text="3" color="#333333" action={handleOperation} />
        <ButtonCalc text="+" color="#FEA00A" action={btnSum} />
      </View>
      {/* Buttons */}
      <View style={styles.filaBtns}>
        <ButtonCalc text="0" color="#333333" action={handleOperation} bigBtn />
        <ButtonCalc text="." color="#333333" action={handleOperation} />
        <ButtonCalc text="=" color="#FEA00A" action={calculateOperation} />
      </View>
    </View>
  );
};

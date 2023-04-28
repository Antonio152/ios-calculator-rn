import {useState, useRef} from 'react';
enum EOperators {
  sum,
  rest,
  divide,
  multiply,
}
export const useCalculator = () => {
  const [lastNumber, setLastNumber] = useState('0');
  const [number, setNumber] = useState('0');
  const lastOperation = useRef<EOperators>();
  const cleanValue = () => {
    setNumber('0');
    setLastNumber('0');
  };
  const handleOperation = (numberV: string) => {
    if (number.includes('.') && numberV === '.') {
      return;
    }
    if (number === '0' || number === '-0') {
      if (numberV === '0') {
        return;
      }

      if (numberV === '.') {
        // 0 --> 0. || -0 --> -0.
        setNumber(number + numberV);
      } else {
        // 0 --> 9 || -0 --> -9
        if (number.startsWith('-')) {
          numberV = '-' + numberV;
        }
        setNumber(numberV);
      }
    } else {
      setNumber(number + numberV);
    }
  };
  const positiveNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };
  const btnDel = () => {
    if (number.length === 1 || (number.length === 2 && number.includes('-'))) {
      setNumber('0');
    } else {
      setNumber(number.slice(0, -1));
    }
  };
  const changeLastNumber = () => {
    if (number.endsWith('.')) {
      setLastNumber(number.slice(0, -1));
    } else {
      setLastNumber(number);
    }
    setNumber('0');
  };

  const btnDivide = () => {
    changeLastNumber();
    lastOperation.current = EOperators.divide;
  };
  const btnSum = () => {
    changeLastNumber();
    lastOperation.current = EOperators.sum;
  };
  const btnRest = () => {
    changeLastNumber();
    lastOperation.current = EOperators.rest;
  };
  const btnMultiply = () => {
    changeLastNumber();
    lastOperation.current = EOperators.multiply;
  };

  const calculateOperation = () => {
    const num1 = Number(number);
    const num2 = Number(lastNumber);
    switch (lastOperation.current) {
      case EOperators.sum:
        if (num2 === 0 && num1 === 0) {
          setNumber('0');
        } else {
          setNumber(`${num1 + num2}`);
        }
        break;
      case EOperators.rest:
        if (num2 === 0 && num1 === 0) {
          setNumber('0');
        } else {
          setNumber(`${num2 - num1}`);
        }
        break;
      case EOperators.divide:
        if (num2 === 0 && num1 === 0) {
          setNumber('Error');
        } else {
          setNumber(`${num2 / num1}`);
        }
        break;
      case EOperators.multiply:
        if (num2 === 0 && num1 === 0) {
          setNumber('0');
        } else {
          setNumber(`${num1 * num2}`);
        }
        break;
    }
    setLastNumber('0');
  };
  return {
    //Propieties
    number,
    lastNumber,
    //Functions
    cleanValue,
    handleOperation,
    positiveNegative,
    btnDel,
    btnDivide,
    btnSum,
    btnRest,
    btnMultiply,
    calculateOperation,
  };
};

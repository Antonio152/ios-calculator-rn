import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  backgroundApp: {
    flex: 1,
    backgroundColor: '#000',
  },
  calculadoraContainer: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'flex-end',
  },
  resultado: {
    color: '#fff',
    fontSize: 60,
    textAlign: 'right',
    marginBottom: 10,
  },
  smallRes: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 30,
    textAlign: 'right',
  },
  filaBtns: {
    flexDirection: 'row',
    justifyContent: 'center',
    // alignSelf: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },
  button: {
    height: 80,
    width: 80,
    backgroundColor: '#A5A5A5',
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#000',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

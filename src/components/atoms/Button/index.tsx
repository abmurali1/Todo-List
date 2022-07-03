import React, {FC} from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
}

const Button: FC<ButtonProps> = props => {
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={props.onPress}>
      <Text allowFontScaling={false} style={styles.textStyle}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: '#465c47',
    height: 50,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 10,
  },
  textStyle: {
    color: '#ccb866',
    fontSize: 20,
    fontFamily: 'Verdana',
    letterSpacing: 3,
  },
});

export default Button;

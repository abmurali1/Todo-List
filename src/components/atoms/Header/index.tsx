import React, {FC, useEffect} from 'react';
import {StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native';

interface HeaderProps {
  headerTitle: string;
  onPress: () => void;
}
const Header: FC<HeaderProps> = props => {
  return (
    <View style={styles.headerStyle}>
      <TouchableOpacity onPress={props.onPress}>
        <Image
          source={require('../../../assets/images/arrowRight/arrow-right.png')}
          style={styles.imageStyle}
        />
      </TouchableOpacity>
      <Text style={styles.textStyle}>{props.headerTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: 'row',
    borderBottomWidth: 0.2,
    borderBottomColor: 'black',
    width: '100%',
    justifyContent: 'flex-start',
    padding: 10,
    alignItems: 'center',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Verdana',
    fontWeight: 'bold',
    color: '#1b1f16',
  },
  imageStyle: {
    height: 20,
    width: 20,
    transform: [{rotate: '180deg'}],
    marginRight: 100,
  },
});

export default Header;

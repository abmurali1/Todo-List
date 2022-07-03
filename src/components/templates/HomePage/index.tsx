import React, {FC} from 'react';
import {SafeAreaView, StyleSheet, Text, Image, View} from 'react-native';

import Button from '../../atoms/Button/index';
import I18n from '../../../localization/index';

interface HomePageProps {
  title: string;
  navigation: any;
}
const HomePage: FC<HomePageProps> = props => {
  return (
    <SafeAreaView style={{backgroundColor: 'lightgreen', flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.textstyle}>{I18n.t('crypto_market')}</Text>
        <Image
          source={require('../../../assets/images/home/bag.png')}
          style={{height: 300, width: 300}}
        />
        <Button
          title={I18n.t('start')}
          onPress={() => {
            props.navigation.navigate('CoinMarket');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textstyle: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Arial',
    fontWeight: 'bold',
    color: '#1b1f16',
  },
  container: {flex: 1, alignItems: 'center', justifyContent: 'space-between'},
});

export default HomePage;

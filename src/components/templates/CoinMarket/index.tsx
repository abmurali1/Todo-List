import React, {FC, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../../atoms/Header';

import {getAllCoins} from './action';
import I18n from '../../../localization/index';

interface CoinMarketProps {
  title: string;
  getAllCoins: Function;
  navigation: Object;
}
const CoinMarket: FC<CoinMarketProps> = props => {
  const dispatch = useDispatch();
  const coinsInfo = useSelector((state: any) => state.AllCoinsReducer.allCoins);

  useEffect(() => {
    dispatch(getAllCoins());
  }, []);

  const renderDataItem = (item: any, index: number) => {
    return (
      <View style={styles.container}>
        <Image
          source={{
            uri: item.item.image,
          }}
          style={{height: 50, width: 50}}
        />
        <Text style={{width: 70}}>{item.item.name}</Text>
        <Text>{item.item.market_cap_rank}</Text>
        <Text>{item.item.symbol}</Text>
        <Text style={{fontWeight: 'bold'}}>
          {item.item.current_price.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })}{' '}
        </Text>
        <Text>{item.item.market_cap}</Text>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('CoinDetails', {coinname: item.item.id});
          }}>
          <Image
            source={require('../../../assets/images/arrowRight/arrow-right.png')}
            style={{height: 20, width: 20}}
          />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <SafeAreaView style={{backgroundColor: 'lightgreen', flex: 1}}>
      <Header
        headerTitle={I18n.t('coin_market')}
        onPress={() => props.navigation.goBack()}
      />
      <View>
        <FlatList
          data={coinsInfo}
          renderItem={(item: any, index: number) => {
            return renderDataItem(item, index);
          }}
          keyExtractor={index => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 5,
    borderColor: 'black',
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
  },
});

export default CoinMarket;

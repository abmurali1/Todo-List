import React, {FC, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';

import I18n from '../../../localization/index';
import {getSelectCoinDetails} from './action';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../../atoms/Header';

interface CoinDetailsProps {
  navigation: any;
  route: any;
}
const CoinDetails: FC<CoinDetailsProps> = props => {
  const dispatch = useDispatch();
  const selectedCoinInfo = useSelector(
    (state: any) => state.SelectedCoinReducer.coinDetails,
  );
  useEffect(() => {
    dispatch(getSelectCoinDetails(props.route.params.coinname));
  }, []);
  return (
    <SafeAreaView style={{backgroundColor: 'lightgreen', flex: 1}}>
      <Header
        headerTitle={I18n.t('coin_details')}
        onPress={() => props.navigation.goBack()}
      />
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={[styles.textstyle, {fontSize: 50, marginTop: 10}]}>
              {'~' + selectedCoinInfo?.name.toUpperCase() + '~'}
            </Text>
            <Image
              source={{
                uri: selectedCoinInfo?.image.large,
              }}
              style={{height: 200, width: 200, alignSelf: 'center'}}
            />
            <Text style={{marginHorizontal: 20, marginTop: 30}}>
              {selectedCoinInfo?.description.en}
            </Text>
            <Text style={styles.linkText}>
              {'Want know more? Check out official site!!'}
            </Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(selectedCoinInfo?.links?.homepage[0])
                }>
                <Text style={styles.subLinkText}>{selectedCoinInfo?.name}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    selectedCoinInfo?.links?.official_forum_url[0],
                  )
                }>
                <Text style={styles.subLinkText}>{'Official Forum'}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(selectedCoinInfo?.links?.repos_url.github[0])
                }>
                <Text style={styles.subLinkText}>{'Github'}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
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
  container: {flex: 1, alignItems: 'center'},
  linkText: {
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  subLinkText: {
    textDecorationLine: 'underline',
    color: 'blue',
    fontStyle: 'italic',
  },
});

export default CoinDetails;

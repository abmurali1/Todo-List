import React from 'react';
import {Provider} from 'react-redux';
import RootNavigator from './src/navigation';
import {store} from './src/store/configureStore';

const App = () => {
  console.disableYellowBox = true;
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;

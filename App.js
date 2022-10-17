
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { Provider } from 'react-redux';
import store from './src/redux/store';
import Stacknav from './src/provider/routeNavigation'


const App = () => {
  return (

    // <Provider store={store}>
      <NavigationContainer>
        <Stacknav />
      </NavigationContainer>
    // </Provider>


  );
};


export default App;
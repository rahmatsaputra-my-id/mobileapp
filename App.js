import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/App/Global/Configuration/Store';
import { NavigatorApps } from './src/App/Global/Navigator/Navigator.app';

function App(){
  return (
    <Provider store={store}>
      <NavigatorApps />
    </Provider>
  );
}

export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Main from './Main';
import {Provider} from "react-redux"
import {store} from "./app/store"

function App(): JSX.Element {

  return (
    <Provider store={store} >
    <Main/>
   </Provider>
  );
}



export default App;

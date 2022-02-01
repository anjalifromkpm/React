import React from 'react';
import Books from './Books/Books';
import Notes from './Notes/Notes';
import Pen from './Pen/Pen';
import {Provider} from 'react-redux';
import store from '../../../store';

const App = () => {
  return <Provider store={store}>
            <Books />
            <hr />
            <Notes />
            <hr />
            <Pen />
         </Provider>;
};

export default App;

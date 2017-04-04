import { createStore } from 'redux';
import welcome from './welcome.js';
export default function app() {

  const initialState = {
    view: welcome,
    menu: []
  };

  const appReducer = function( state, action ) {

    if ( state === undefined ) {
      state = initialState;
    }

    switch ( action.type ) {
      case "TESTING":
        console.log('It works!');
        console.log(state);
        return state;

      default:
        return state;
    }

  const render = function () {
    let state = store.getState();
    $('#app').html(state.view(store));
  };

    const store = createStore( appReducer );

    store.subscribe( render );
    store.dispatch({ type: "TESTING" });
    // console.log(createStore(function (state = [], action) {
    //   return state;
    // }));
  }
}

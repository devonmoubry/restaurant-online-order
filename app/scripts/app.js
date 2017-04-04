import { createStore } from 'redux';
import welcome from './welcome.js';
import menu from './menu.js';
export default function app() {

  const initialState = {
    view: welcome,
    menu: []
  };

  const appReducer = function( currentState, action ) {

    if ( currentState === undefined ) {
      currentState = initialState;
    }

    switch ( action.type ) {
      case "LOAD_MENU":
        $.ajax({
           type: 'GET',
           url: 'https://tiy-austin-front-end-engineering.github.io/restaurantApi/cafe.json',
           datatype: 'jsonp',
           success: function(data, status, xhr) {
             console.log(data);
           }
        })
        return currentState;

      // case "MENU_LOADED":

      default:
        return currentState;
    }

};

  const render = function () {
    let state = store.getState();
    $('#app').html(state.view(store));
  };

    const store = createStore( appReducer );

    store.subscribe( render );
    store.dispatch({ type: "LOAD_MENU" });
    // console.log(createStore(function (state = [], action) {
    //   return state;
    // }));
  }

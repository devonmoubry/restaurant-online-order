import { createStore } from 'redux';
import welcome from './welcome.js';
import menu from './menu.js';
export default function app() {

  const initialState = {
    view: welcome,
    menu: [],
    order: []
  };
  const url = 'http://tiny-za-server.herokuapp.com/collections/devonmoubry-olympiacafe';
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
             store.dispatch({ type: "MENU_LOADED", menu: data});
           }
        })
        return currentState;

      case "MENU_LOADED":
        var newState = {
          menu: action.menu,
          view: menu
        }
        return Object.assign({}, currentState, newState);

      case "ADD_MENU_ITEM":
        var newOrder = currentState.order;
        newOrder.push(action.orderItem);
        var newState = {
          order: newOrder
        };
        console.log("new state:", newState);
        return Object.assign({}, currentState, newState);

      default:
        return currentState;
    }

};

  const render = function () {
    let state = store.getState();
    state.view(store);
  };

    const store = createStore( appReducer );

    store.subscribe( render );
    store.dispatch({ type: "LOAD_MENU" });
    // console.log(createStore(function (state = [], action) {
    //   return state;
    // }));
  }

export default function ( store ) {
  console.log('Menu');
  let menu = store.getState().menu;
  let $html = $(`<section id="menu">
    <p>Cheeseburger, Chips, Pepsi</p>
  </section>`);

  console.log(menu);

  $('#welcome').append($html);
}

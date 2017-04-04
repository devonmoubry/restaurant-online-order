export default function ( store ) {
  console.log('Menu');
  let menuData = store.getState().menu;

  let $menu = $(`<section id="menu"></section>`);

  for (var key in menuData) {
    var $category = $(`
      <div class="category">
        <h2>${key}</h2>
        <ul class="items"></ul>
      </div>
    `);

    for (var i = 0; i < menuData[key].length; i++) {
      var $item = $(`
        <li>${menuData[key][i]['item']}</li>
      `);
      $category.find('.items').append($item);
    }


    $menu.append($category);

    console.log(key, menuData[key]);
  }

  $('#welcome').append($menu);
}

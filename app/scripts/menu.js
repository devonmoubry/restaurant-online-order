export default function ( store ) {
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
      var itemData = menuData[key][i];
      var $item = $(`
        <li class="item">
          ${itemData['item']}
          ${itemData['price']}
          ${itemData['description']}
          <form action="" method="post">
            <input type="hidden" name="item-id" value="${itemData['id']}">
            <input type="submit" value="add to cart">
          </form>
        </li>
      `);
      $category.find('.items').append($item);
    }

    $menu.append($category);

  }

  $('#welcome').append($menu);
  
  $('.item form').submit(function(event) {
    event.preventDefault();
    var itemId = event.target.elements['item-id'].value;
    console.log(itemId);
    store.dispatch({ type: "ADD_MENU_ITEM", orderItem: itemId });
    console.log(event);
  });
}

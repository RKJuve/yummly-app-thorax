define([
  'collection-view',
  'templates/shopping-list',
  'templates/shopping-list-item',
  'templates/shopping-list-empty'
], function (CollectionView, template, itemTemplate, emptyTemplate) {

  return CollectionView.extend({
    name: 'shoppingList',
    template: template,
    itemTemplate: itemTemplate,
    emptyTemplate: emptyTemplate
  });

});

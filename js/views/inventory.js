define([
  'collection-view',
  'templates/inventory',
  'templates/inventory-item',
  'templates/inventory-empty'
], function (CollectionView, template, itemTemplate, emptyTemplate) {

  return CollectionView.extend({
    name: 'inventory',
    template: template,
    itemTemplate: itemTemplate,
    emptyTemplate: emptyTemplate
  });

});

define([
  'collection-view',
  'templates/favorites',
  'templates/favorites-item',
  'templates/favorites-empty'
], function (CollectionView, template, itemTemplate, emptyTemplate) {

  return CollectionView.extend({
    name: 'favorites',
    template: template,
    itemTemplate: itemTemplate,
    emptyTemplate: emptyTemplate
  });

});

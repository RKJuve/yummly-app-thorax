define([
  'collection-view',
  'templates/user-recipes',
  'templates/user-recipes-item',
  'templates/user-recipes-empty'
], function (CollectionView, template, itemTemplate, emptyTemplate) {

  return CollectionView.extend({
    name: 'userRecipes',
    template: template,
    itemTemplate: itemTemplate,
    emptyTemplate: emptyTemplate
  });

});

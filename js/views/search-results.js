define([
  'collection-view',
  'templates/search-results',
  'templates/search-results-item',
  'templates/search-results-empty'
], function (CollectionView, template, itemTemplate, emptyTemplate) {

  return CollectionView.extend({
    name: 'searchResults',
    template: template,
    itemTemplate: itemTemplate,
    emptyTemplate: emptyTemplate
  });

});

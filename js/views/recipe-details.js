define([
  'view',
  'templates/recipe-details'
], function (View, template) {
  return View.extend({
    name: 'recipeDetails',
    template: template
  });
});

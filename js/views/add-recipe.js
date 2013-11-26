define([
  'view',
  'templates/add-recipe'
], function (View, template) {
  return View.extend({
    name: 'addRecipe',
    template: template
  });
});

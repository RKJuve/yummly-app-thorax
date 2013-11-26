define([
  'view',
  'templates/user-recipe-details'
], function (View, template) {
  return View.extend({
    name: 'userRecipeDetails',
    template: template
  });
});

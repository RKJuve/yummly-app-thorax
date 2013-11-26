define([
  'view',
  'templates/user-recipe-edit'
], function (View, template) {
  return View.extend({
    name: 'userRecipeEdit',
    template: template
  });
});

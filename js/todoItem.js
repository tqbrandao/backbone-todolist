let TodoItem = Backbone.Model.extend({
  validate: function (attrs) {
    if (!attrs.description) return "Descrição é necessária.";
  },
});

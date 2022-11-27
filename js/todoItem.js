let TodoItem = Backbone.Model.extend({
  defaults: {
    isCompleted: false,
  },

  validate: function (attrs) {
    if (!attrs.description) return "Descrição é necessária.";
  },

  toggle: function () {
    this.set("isCompleted", !this.get("isCompleted"));
  },
});

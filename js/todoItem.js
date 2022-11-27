let TodoItem = Backbone.Model.extend({
  defaults: {
    isCompleted: false,
  },

  urlRoot: "https://jsonplaceholder.typicode.com/todos",

  validate: function (attrs) {
    if (!attrs.title) return "Descrição é necessária.";
  },

  toggle: function () {
    this.set("completed", !this.get("completed"));
  },
});

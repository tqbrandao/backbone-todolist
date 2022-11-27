let TodoItemView = Backbone.View.extend({
  initialize: function (options) {
    if (!(options && options.model))
      throw new Error("modelo nao foi especificado!");
  },
  render: function () {
    this.$el.html(this.model.get("description"));

    return this;
  },
});
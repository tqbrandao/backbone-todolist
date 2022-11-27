let TodoItemsView = Backbone.View.extend({
  tagName: "ul",

  id: "todoItems",

  initialize: function (options) {
    if (!(options && options.model))
      throw new Error("o model nao foi especificado.");

    this.model.on("add", this.onAddTodoItem, this);
  },

  onAddTodoItem: function () {
    let view = new TodoItemView({ model: todoItem });
    this.$el.append(view.render().$el);
  },

  events: {
    "click #add": "onClickAdd",
  },

  onClickAdd: function () {
    let todoItem = new TodoItem({ description: "New Todo Item" });
    this.model.add(todoItem);
  },

  render: function () {
    let self = this; // mantendo uma referencia a view antes de iterar a colecao (a this keyword vai mudar em cada interacao, apontando pra view que ta sendo iterada no momento)

    this.$el.append("<button id='add'>Add</button>");

    this.model.each(function (todoItem) {
      let view = new TodoItemView({ model: todoItem });
      self.$el.append(view.render().$el);
    });

    return this;
  },
});

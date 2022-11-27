let TodoItemsView = Backbone.View.extend({
  id: "todoItemsContainer",

  initialize: function (options) {
    if (!(options && options.model))
      throw new Error("o model nao foi especificado.");

    this.model.on("add", this.onAddTodoItem, this);
    this.model.on("remove", this.onRemoveTodoItem, this);
  },

  onRemoveTodoItem: function (todoItem) {
    //o argumento eh o model removido
    this.$("li#" + todoItem.id).remove();
  },

  onAddTodoItem: function (todoItem) {
    // o argumento eh o model adicionado
    let view = new TodoItemView({ model: todoItem });
    this.$("#todoItems").append(view.render().$el);
  },

  events: {
    "click #add": "onClickAdd",
    "keypress #newTodoItem": "onKeyPress",
  },

  onKeyPress: function (e) {
    if (e.keyCode == 13) this.onClickAdd();
  },

  onClickAdd: function () {
    let $textBox = this.$("#newTodoItem");

    if ($textBox.val()) {
      let todoItem = new TodoItem({ title: $textBox.val() });
      todoItem.save(); //sincronizando com o server!
      this.model.add(todoItem);

      $textBox.val("");
    }
  },

  render: function () {
    let self = this; // mantendo uma referencia a view antes de iterar a colecao (a this keyword vai mudar em cada interacao, apontando pra view que ta sendo iterada no momento)

    this.$el.append(
      "<input type='text' id='newTodoItem' autofocus placeholder='Qual a próxima tarefa?'></input>"
    );
    this.$el.append("<button id='add'>Adicionar</button>");
    this.$el.append("<ul id='todoItems'></ul>");

    // ---- ESSAS LINHAS PASSARAM A SER DESNECESSARIAS QUANDO DECIDIMOS USAR A REST API (USANDO O ADD METHOD, QUE FAZ ISSO AUTOMATICAMENTE)
    // this.model.each(function (todoItem) {
    //   let view = new TodoItemView({ model: todoItem });
    //   self.$el.append(view.render().$el);
    // });

    return this;
  },
});

// Usando o metodo document.ready do JQuery pra garantir que o DOM esta full carregado antes de qualquer acao.

$(document).ready(function () {
  let todoItems = new TodoItems();
  todoItems.fetch();

  let todoItemsView = new TodoItemsView({ model: todoItems });
  $("body").append(todoItemsView.render().$el);
});

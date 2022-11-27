// Usando o metodo document.ready do JQuery pra garantir que o DOM esta full carregado antes de qualquer acao.

$(document).ready(function () {
  let todoItem = new TodoItem({ description: "Item 1" });

  let todoItemView = new TodoItemView({ model: todoItem });
  $("body").append(todoItemView.render().$el);
});

let TodoItemView = Backbone.View.extend({
  tagName: "li",

  initialize: function (options) {
    if (!(options && options.model))
      throw new Error("modelo nao foi especificado!");

    this.model.on("change", this.render, this); // subescrevendo pro evento "change" do model! Seria tipo o listening no vanilla
  },

  events: {
    "click #toggle": "onClickToggle",
    "click #delete": "onClickDelete",
  },

  onClickDelete: function () {
    this.model.destroy();
  },

  onClickToggle: function () {
    this.model.toggle();
    this.model.save(); //para sincronizar com o server e nao ficar soh na memoria
    console.log(this.model.toJSON());
  },

  render: function () {
    this.$el.attr("id", this.model.id);

    this.$el.toggleClass("completed", this.model.get("completed"));

    let checked = this.model.get("completed") ? "checked" : "";
    this.$el.html(
      "<input id='toggle' type='checkbox' " +
        checked +
        "></input> " +
        this.model.escape("title") +
        "<button id='delete'>Delete</button>"
    );
    // Usamos o metodo escape ao inves do get por questoes de seguranca. O metodo escape eh igual ao get, mas ele encoda o valor retornado, impedindo que pessoa maliciosa introduza codigo javascript no input field.

    return this;
  },
});

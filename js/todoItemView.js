let TodoItemView = Backbone.View.extend({
  tagName: "li",

  initialize: function (options) {
    if (!(options && options.model))
      throw new Error("modelo nao foi especificado!");

    this.model.on("change", this.render, this); // subescrevendo pro evento "change" do model! Seria tipo o listening no vanilla
  },

  events: {
    "click #toggle": "onClickToggle",
  },

  onClickToggle: function () {
    this.model.toggle();
    console.log(this.model.toJSON());
  },

  render: function () {
    this.$el.toggleClass("completed", this.model.get("isCompleted"));

    let checked = this.model.get("isCompleted") ? "checked" : "";
    this.$el.html(
      "<input id='toggle' type='checkbox' " +
        checked +
        "></input> " +
        this.model.escape("description")
    );
    // Usamos o metodo escape ao inves do get por questoes de seguranca. O metodo escape eh igual ao get, mas ele encoda o valor retornado, impedindo que pessoa maliciosa introduza codigo javascript no input field.

    return this;
  },
});

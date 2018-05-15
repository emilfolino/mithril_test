var m = require("mithril");

var polisen = require("../models/polisen.js");

module.exports = {
    oninit: function () {
        polisen.get();
    },
    view: function() {
        return [
            m("h1", "polisen"),
            m("div", polisen.list.map(function(event) {
                return m("p", event.name);
            }))
        ];
    }
};

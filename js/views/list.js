var m = require("mithril");

var polisen = require("../models/polisen.js");

module.exports = {
    oninit: function () {
        console.log("hej oninit");
        polisen.get();
    },
    view: function() {
        return m("h1", "polisen");
    }
};

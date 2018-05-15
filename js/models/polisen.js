var m = require("mithril");

var polisen = {
    get: function() {
        console.log("hej hopp");
        return m.request({
            url: "https://polisen.se/api/events?locationname=Blekinge;Karlskrona",
            method: "GET"
        }).then(function(result) {
            console.log(result)
        });
    }
};

module.exports = polisen;

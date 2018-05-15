var m = require("mithril");

var polisen = {
    get: function() {
        return m.request({
            url: "proxy.php",
            method: "GET"
        }).then(function(result) {
            console.log(result)
        });
    }
};

module.exports = polisen;

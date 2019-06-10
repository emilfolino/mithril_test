var m = require("mithril");

var polisen = {
    list: [],
    get: function() {
        return m.request({
            url: "http://localhost/dbwebb/mithril_test/proxy.php",
            method: "GET"
        }).then(function(result) {
            polisen.list = result;
        });
    }
};

module.exports = polisen;

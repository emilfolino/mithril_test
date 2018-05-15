var m = require("mithril");

var polisen = {
    get: function() {
        console.log("get");
        return m.request({
            url: "http://www.student.bth.se/~efostud/mithril_test/proxy.php",
            method: "GET"
        }).then(function(result) {
            console.log(result)
        });
    }
};

module.exports = polisen;

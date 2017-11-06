const m = require("mithril")
var requestJSONData = function() {
        m.request({
            method: "PUT",
            url: "//rem-rest-api.herokuapp.com/api/tutorial/1",
            data: {count: count + 1},
            withCredentials: true,
        })
        .then(function(data) {
            count = parseInt(data.count)
        })
    }
 
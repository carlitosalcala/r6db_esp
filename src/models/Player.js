// src/models/Player.js
var m = require("mithril")

console.log("player loading...")

var Player = {
    list: [],
    loadList: function() {
        return m.request({
            method: "GET",
            url: "https://r6db.com/api/v2/players?name=" + "an4cl3t0" + "&platform=PC&exact=true",
            headers: {
                'X-App-Id': 'b6131c13d379bb5429a1437e1e823836'
            },  
        })
        .then(function(result) {      
            console.log(result); 
            Player.list = result
        })
    },
        current: {},
        load: function(id) {
            return m.request({
                method: "GET",
                url: "https://r6db.com/api/v2/players?name=" + id + "&platform=PC&exact=true",
                headers: {
                    'X-App-Id': 'b6131c13d379bb5429a1437e1e823836'
                },  
            })
            .then(function(result) {
                User.current = result
            })
        }
}

if (Player.list[0] == null){
    console.log("Player no full")
}else{
    console.log("Player.list[1]")
}

module.exports = Player

 
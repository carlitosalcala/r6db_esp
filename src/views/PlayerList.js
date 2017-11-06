// src/views/PlayerList.js
var m = require("mithril")
var Player = require("../models/Player")

module.exports = {    
    oninit: Player.loadList,
    view: function() {      
        return m(".player-list", Player.list.map(function(player) {
            console.log(player)
     //       return m("a.player-list-item", {href: "/edit/" + player.id, oncreate: m.route.link}, "Name: " + player.name + " Level: " + 
     //       player.level )
            return m("ul", { "class": "demo-list-item mdl-list" },
                m("li", { "class": "mdl-list__item" },
                  m("span",{ "class": "mdl-list__item-primary-content" },
                    m("a.user-list-item", 
                    {href: "/edit/" + player.id, oncreate: m.route.link}, " Name: " + player.name + " Level: " + player.level )
                  )
                )) 
        }))
    }
}
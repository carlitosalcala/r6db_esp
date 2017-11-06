// copied from src/views/UserForm.js
var m = require("mithril")
var Player = require("../models/Player")

module.exports = {
    oninit: function(vnode) {Player.load(vnode.attrs.id)},
    view: function() {
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
        
        return m
        ("form", {
                onsubmit: function(e) {
                    e.preventDefault()
                   // Player.save()
                }
            }, 
            
            [
            m("label.label", "First name"),
            m("input.input[type=text][placeholder=First name]", {
                oninput: m.withAttr("value", function(value) {Player.current.firstName = value}),
                value: Player.current.firstName
            }),
            m("label.label", "Last name"),
            m("input.input[placeholder=Last name]", {
                oninput: m.withAttr("value", function(value) {Player.current.lastName = value}),
                value: Player.current.lastName
            }),
            m("button.button[type=submit]", "Save"),
        ])
    }
}
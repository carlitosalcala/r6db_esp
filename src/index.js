// src/index.js
var m = require("mithril")
 var UserList = require("./views/UserList")
var UserForm = require("./views/UserForm") 
var Layout = require("./views/Layout")
// my shit
var PlayerList = require("./views/PlayerList")
var PlayerList = require("./views/PlayerBasicDetail")

console.log("require from index loaded")

m.route(document.body, "/player", {
   "/list": {
        render: function() {
            return m(Layout, m(UserList))
        }
    }, 
    "/edit/:id": {
        render: function(vnode) {
            return m(Layout, m(UserForm, vnode.attrs))
        }
    },  
    // my shit
    "/player": {
        render: function() {
            return m(Layout, m(PlayerList))
        }
    },
    "/basicdetail/:id": {
        render: function() {
            return m(Layout, m(PlayerBasicDetail))
        }
    },
})
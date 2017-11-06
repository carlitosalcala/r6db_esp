//src/views/Layout.js

var m = require("mithril")
var button = require("material-design-lite")

console.log("layout loaded")

module.exports = {
    view: function(vnode) {
        return m("main.layout", [
            m("nav.menu",  [  //nav_menu
          //    m(".mdl-menu.mdl-js-menu.mdl-js-ripple-effect.mdl-menu--bottom-right" ,[
                        m("a[href='/home']" , {oncreate: m.route.link}, "Home "),
                        m("a[href='/home']", {oncreate: m.route.link}, "Other home "),
                        m("a[href='/home']", {oncreate: m.route.link}, "Last home "),
                    m("br", "/br"),m("br", "/br"),
              //  ]),

                    m("input[href='/player']", "Search player"),
                    
                       m(".mdl-button.mdl-js-button.mdl-button--raised.mdl-js-ripple-effect.mdl-button--accent", "Search"),m("br", "/br"),
            
                    m("a[href='/list']", {oncreate: m.route.link}, "User list")

        ]),
            m(".mdl-list", vnode.children) 
        ])


    }
}
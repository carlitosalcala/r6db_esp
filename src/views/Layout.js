//src/views/Layout.js
var m = require("mithril")

console.log("layout loaded")

module.exports = {
    view: function(vnode) {
        return m("div", [ // {href: "/basicdetail/" + vnode.id, onupdate: m.route.link} , [ // { onsubmit: ""} , [
            m("div",{ "class": "mdl-textfield mdl-js-textfield mdl-textfield--floating-label" },[
                m("input.mdl-textfield__input", {type:"text", placeholder:"Buscar jugador", name:"player", id:"player" }),
                m("label.mdl-textfield__label", {for:"player"}),
            ]),
            m("button",
            { "class": "mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored" },
        m("i",
            { "class": "material-icons", href: "/basicdetail/" + vnode.id, onsubmit:m.route.link },"+"  
            )
        ) ,            
        m('button.mdl-button.mdl-js-button.mdl-js-ripple-effect.mdl-button--colored[type="submit"]'),
            m("section", vnode.children)
        ])
    }
}
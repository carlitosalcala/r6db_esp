
import first from './first';
// import * as getUsefulContents from './requestData';

const m = require("mithril")

//m.render(document.body,m("button", "I am a funny button"))
var root = document.body

var count = 0;
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

m.render(root, [
    m("main_2", [   
        m("h3", {class: "title_2"}, "My first app 2"),
        m("button", "A button_2"),m("h3","some text_2"),        
        m("button", {onclick: requestJSONData()}, count+ "clicks"),
    ]),
    m("main", [
        m("h4", {class: "title"}, "My first app"),
        m("button", "A button"),m("h3","some text"),
        m("main_3", [
            m("h3", {class: "title_2"}, "My first app 2"),
            m("button", {onclick: requestJSONData()},"A button_2"),m("h3","some text_2"),
        ])
    ])
])
// m.mount(document.body,m("h1"),"Hello node with button!")
// first.handleClick()

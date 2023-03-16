// ==UserScript==
// @name        Linkedin.uncheck
// @version     0.1
// @include     https://www.linkedin.com/*
// @namespace   https://greasyfork.org/users/932694
// @description uncheck the follow box if active on easy apply
// ==/UserScript==

var lastname = document.getElementsByName("last_name");


function changelastnamevalue(){

    lastname[0].value = "--"
};

function dolastnamebutton() {
    
    let btn = document.createElement("button");
    btn.innerHTML = "Click Me";
    btn.addEventListener("click", changelastnamevalue)

    var div_parent = lastname[0].parentElement;

    div_parent.appendChild(btn);
};

var intervalID = window.setInterval(
    dolastnamebutton,
    2000
);



(function(){
    dolastnamebutton();
});


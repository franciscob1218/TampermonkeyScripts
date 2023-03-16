// ==UserScript==
// @name        Linkedin.uncheck
// @version     1.0
// @include     https://www.linkedin.com/*
// @namespace   https://greasyfork.org/users/932694
// @description uncheck the follow box if active on easy apply
// ==/UserScript==

var checkbox = document.getElementById("follow-company-checkbox");

// Set an interval to check the checkbox status every 0.5 seconds
setInterval(function () {
    // If the checkbox is checked, uncheck it
    if (checkbox.checked) {
        checkbox.checked = false;
    }
}, 500);

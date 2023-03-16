// ==UserScript==
// @name        Linkedin.uncheck
// @version     1.2
// @include     https://www.linkedin.com/*
// @namespace   https://greasyfork.org/users/932694
// @description uncheck the follow box if active on easy apply
// ==/UserScript==


var test = "worked";

// Set an interval to check the checkbox status every 0.5 seconds
setInterval(function () {
    console.log("This ran");
    // If the checkbox is checked, uncheck it
    if (document.getElementById("follow-company-checkbox").checked) {
        document.getElementById("follow-company-checkbox").checked = false;
        console.log("Checkbox was checked and has been unchecked.");
    }
}, 4000);

$.urlParam = function (name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)')
                      .exec(window.location.search);

    return (results !== null) ? results[1] || 0 : false;
}

console.log("Logged for BG; Dark mode " + $.urlParam('darkmode') + "!"); 
if ($.urlParam('darkmode') == "on") {
    document.body.style.background = ("#1C1C1C");
} else {
    document.body.style.background = ("#FFFFFF");
}
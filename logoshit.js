$.urlParam = function (name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)')
                      .exec(window.location.search);

    return (results !== null) ? results[1] || 0 : false;
}
var fileName = location.pathname.split("/").slice(-1);
console.log("Logged for Logo; Dark mode " + $.urlParam('darkmode') + "!"); 
if ($.urlParam('darkmode') == "on") {
    document.write('<p style="text-align:center;"><img src="Photos/dustyzerotxt-light.png" style="width:100%"></p>');
} else {
    document.write('<p style="text-align:center;"><img src="Photos/dustyzerotxt.png" style="width:100%"></p>');
}
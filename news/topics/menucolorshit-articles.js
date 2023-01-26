$.urlParam = function (name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)')
                      .exec(window.location.search);

    return (results !== null) ? results[1] || 0 : false;
}
var fileName = location.pathname.split("/").slice(-1);
console.log("Logged for MenuBtn; Dark mode " + $.urlParam('darkmode') + "!"); 
if ($.urlParam('darkmode') == "on") {
    document.write('<a href="#menu" class="menu-link"><img src="../../../Photos/hamburger-light.png" style="width:10%"></a>');
} else {
    document.write('<a href="#menu" class="menu-link"><img src="../../../Photos/hamburger.png" style="width:10%"></a>');
}
$.urlParam = function (name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)')
                      .exec(window.location.search);

    return (results !== null) ? results[1] || 0 : false;
}
var fileName = location.pathname.split("/").slice(-1);
if ($.urlParam('darkmode') == "on") {
    document.write('<li><a href="../../../index.html?darkmode=on">Home</a></li>');
    document.write('<li><a href="../../../faq.html?darkmode=on">FAQ</a></li>');
    document.write('<li><a href="../../../about.html?darkmode=on">About</a></li>');
    document.write('<li><a href="../index.html?darkmode=on">News Navigator</a></li>');
    document.write('</br>');
    document.write('<li><a href="' + fileName + '?darkmode=off">Switch to Light Mode</a></li>');
    document.write('<a>Version: <script src="../../../versioning.js"></script></a>');
} else {
    document.write('<li><a href="../../../index.html">Home</a></li>');
    document.write('<li><a href="../../../faq.html">FAQ</a></li>');
    document.write('<li><a href="../../../about.html">About</a></li>');
    document.write('<li><a href="../index.html">News Navigator</a></li>');
    document.write('</br>');
    document.write('<li><a href="' + fileName + '?darkmode=on">Switch to Dark Mode</a></li>');
    document.write('<a>Version: <script src="../../../versioning.js"></script></a>');
}
const username = prompt("What's your username?");
const password = prompt("What's your password?");
function decode(str) {
    percentEncodedStr = atob(str).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join('');


    return decodeURIComponent(percentEncodedStr);
}
function myIP() {
    if (window.XMLHttpRequest) xmlhttp = new XMLHttpRequest();
    else xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

    xmlhttp.open("GET","http://api.hostip.info/get_html.php",false);
    xmlhttp.send();

    hostipInfo = xmlhttp.responseText.split("\n");

    for (i=0; hostipInfo.length >= i; i++) {
        ipAddress = hostipInfo[i].split(":");
        if ( ipAddress[0] == "IP" ) return ipAddress[1];
    }

    return false;
}
function removeCharacter(string, removeWhat) {
    originalString = string;
    newString = originalString.replace(removeWhat, '');

    return newString;
}
if (username === 'admin' && password === decode('wqdhZG1pbmlzdHJhdG9yMTIzMzPCpw==')) {
    alert("Epic!\nYou have been logged in.");
    var ip = (removeCharacter(myIP(), ' '));
    
    window.location.href = "index.html";
} else if (username === '' && password === '') {
    alert("Login cancelled!");
    window.location.href = "index.html";
} else {
    window.location.reload();
}
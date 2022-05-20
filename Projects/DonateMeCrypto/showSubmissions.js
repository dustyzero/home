// <html><p style="padding-left: 630px;"><span style="color: #ff0000; background-color: #ffffff;"><strong>You've reached the bottom of the page.</strong></span></p></html>
// document.getElementById("id").innerHTML = "<p style=\"padding-left: 630px;\"><span style=\"color: #ff0000; background-color: #ffffff;\"><strong>You've reached the bottom of the page.</strong></span></p>";
function loadFile(filePath) {
        var result = null;
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", filePath, false);
        xmlhttp.send();
        if (xmlhttp.status==200) {
        result = xmlhttp.responseText;
        }
    return result;
}
const allDaSubmissions = loadFile("submissions.json");
const submissions = ["xmr:48Wj8WYCiwPBTWGZr3srJCZ4Ly7u2YcP43PCA8WbvdW5ihmdPQL1hUwQxyho61wz5F9DQhYTvGYjx7VamtD6zz3xVKbGJbu", "btc:34kPYpHZ6yAepQernLWbxRMMpkZxiCXiCN", "etc:0xf7bF8a5fcc6B30D831065fC460062483614E4871", "eth:0xf7bF8a5fcc6B30D831065fC460062483614E4877"];
var submissionsAdded = submissions.length;
while (submissionsAdded != 0) {
    let submission = submissions[submissionsAdded - 1];
    let properSubmission;
    if (submission.startsWith("eth:")) {
        properSubmission = submissions[submissionsAdded - 1].replace("eth:", "Ethereum: ")
    } else if (submission.startsWith("xmr:")) {
        properSubmission = submissions[submissionsAdded - 1].replace("xmr:", "Monero: ")
    } else if (submission.startsWith("etc:")) {
        properSubmission = submissions[submissionsAdded - 1].replace("etc:", "Ethereum Classic: ")
    } else if (submission.startsWith("btc:")) {
        properSubmission = submissions[submissionsAdded - 1].replace("btc:", "Bitcoin: ")
    }
    
    document.write('<p style="text-align:center;"><span style="background-color: #ffffff;"><strong>' + properSubmission + '</strong></span></p>');
    submissionsAdded--;
}
document.write('<p style="text-align:center;"><span style="color: #ff0000; background-color: #ffffff;"><strong>You\'ve reached the bottom of the page.</strong></span></p>');
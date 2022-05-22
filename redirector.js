// await sleep(5);
/* Simple system to redirect to a random article, written by HoldMyLimez */
function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
}
async function Work() {
    var article = Math.floor(Math.random() * 11) // generate a random number between 0 and 11 to choose an article
    var ddgprivacyChance = Math.floor(Math.random() * 10)
        if (article == 0) { // article refuses to be 11, so give it a 50% chance to be chosen when article is 0
            if (ddgprivacyChance > 5) {
                article = 11;
            }
        }
        console.log('Chosen Article: ');
        if (article == 12) {
            console.log(article - 1);
        } else if (article == -1) {
            console.log(11);
        } else {
            console.log(article);
        }
        await sleep(1500);
        if (article == 12) { // fix possible bug
            article = 11;
        } 
        if (article == -1) { // fix possible bug
            article = 11;
        } 
        if (article == 5) {
            window.location.href = "https://www.wired.com/story/i-ditched-google-for-duckduckgo-heres-why-you-should-too/";
        } else if (article == 3) {
            window.location.href = "https://www.spreadprivacy.com/why-use-duckduckgo-instead-of-google/";
        } else if (article == 8) {
            window.location.href = "https://www.medium.com/thoughful-shower/why-did-i-ditch-google-for-duckduckgo-db465b3a0f43";
        } else if (article == 2) {
            window.location.href = "https://www.matthewsetter.com/ditching-google-for-duckduckgo/";
        } else if (article == 7) {
            window.location.href = "https://www.atlasvpn.com/blog/should-you-ditch-google-for-duckduckgo";
        } else if (article == 9) {
            window.location.href = "https://www.techpp.com/2015/07/06/google-search-duckduckgo/";
        } else if (article == 1) {
            window.location.href = "https://www.cnet.com/tech/services-and-software/set-duckduckgo-as-your-default-search-engine-in-chrome-safari-and-firefox/";
        } else if (article == 10) {
            window.location.href = "https://www.trustedreviews.com/news/what-is-duckduckgo-3969972";
        } else if (article == 4) {
            window.location.href = "https://www.techjunkie.com/purpose-duckduckgo/";
        } else if (article == 6) {
            window.location.href = "https://www.deepweb.net/blog/Google-vs-DuckDuckGo";
        } else if (article == 0) {
            window.location.href = "https://www.programminginsider.com/duckduckgo-vs-google-which-one-should-you-use/";
        } else if (article == 11) { 
            window.location.href = "https://www.duckduckgo.com/privacy";
        } else {
            window.location.reload();
        }
}
Work()
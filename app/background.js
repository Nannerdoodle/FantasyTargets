// chrome.webRequest.onCompleted.addListener(function(details) {
//  console.log('completed' + details);
// }, {urls: ["http://*/*"]}, ["responseHeaders"]);
chrome.webRequest.onCompleted.addListener(
    function(details) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {url: details.url}, function(response) {
      });
    });
},

// filters
{
    urls: [
        "http://games.espn.go.com/ffl/format/playerpop/overview?*",
    ]
},
["responseHeaders"]);


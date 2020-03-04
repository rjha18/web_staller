chrome.webRequest.onBeforeRequest.addListener(
  function(details) { 
    url = JSON.stringify(details.url)
    if (url.includes("123456") || url.includes("css") || url.includes("style") || url.includes("jpg") || url.includes("jpeg") || url.includes("png") || url.includes("js")) {
      return {cancel: false};
    } else {
      return {redirectUrl: "http://localhost:3000?url=" + details.url}
    }
  },
  {urls: ["https://*/*"]},
  ["blocking"]);


// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
//     //alert('updated from background');
//     chrome.tabs.sendMessage( tabId, {
//         message: 'hello!',
//         url: changeInfo.url
//       })
// });

// chrome.runtime.onInstalled.addListener(function () {
//     chrome.storage.sync.set({ color: '#3aa757' }, function () {
//         console.log("The color is green.");
//     });
//     chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
//         chrome.declarativeContent.onPageChanged.addRules([{
//             conditions: [new chrome.declarativeContent.PageStateMatcher({
//                 pageUrl: { hostEquals: 'developer.chrome.com' },
//             })
//             ],
//             actions: [new chrome.declarativeContent.ShowPageAction()]
//         }]);
//     });
//     chrome.tabs.opUpdated.addListener(function (tabId, changeInfo, tab) {

//     })
// });
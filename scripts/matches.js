chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message === "clickBlackList") {
    return sendResponse(checkBL());
  }
});

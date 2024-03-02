console.log("hello.js");

let clicked = false;

const clickBlackList = () => {
  if (!clicked) {
    clicked = true;
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, "clickBlackList", (result) => {
        console.log(result);
        clicked = false;
      })
    });
  }
};

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('clickBlackList').addEventListener('click', clickBlackList);
});

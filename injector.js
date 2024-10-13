const script = document.createElement("script");
script.src = chrome.runtime.getURL("script.js");
script.onload = function () {
  console.log("Starting Bypass View Once WhatsApp...");
};
document.head.appendChild(script);
chrome.runtime.onMessage.addListener((t, u, v) => {
  localStorage.setItem("ViewOnceArray", t);
});
const interval = setInterval(() => {
  const y = localStorage.getItem("last-wid-md")?.["split"]?.(":")[0]["replace"](/\D/g, "");
  if (!y) {
    return;
  }
  clearInterval(interval);
  chrome.runtime.sendMessage(y);
}, 10);
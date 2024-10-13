chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
  try {
      chrome.tabs.sendMessage(sender.tab.id, "[\"WAWebE2EProtoParser\",\"parseMsgProto\"]");
  } catch (e) {}
});






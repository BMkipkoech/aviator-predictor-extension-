document.getElementById('getData').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: "getAviatorData" }, (response) => {
      document.getElementById('data').innerText = `Time: ${response.time}\nOdds: ${response.odds}`;
    });
  });
});

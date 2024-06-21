function extractAviatorData() {
  const timeElement = document.querySelector('.time-class'); // Adjust the selector
  const oddsElement = document.querySelector('.odds-class'); // Adjust the selector
  
  const time = timeElement ? timeElement.innerText : "Time not found";
  const odds = oddsElement ? oddsElement.innerText : "Odds not found";

  return { time, odds };
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getAviatorData") {
    const data = extractAviatorData();
    sendResponse(data);
  }
});

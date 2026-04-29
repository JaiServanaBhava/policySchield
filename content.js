console.log("PolicySchield: Content script injected successfully.");

function getPrivacyText() {
    // Grabbing the first 15,000 characters to keep within Gemini Flash limits
    const text = document.body.innerText;
    console.log("PolicySchield: Scraping page text...");
    return text.substring(0, 15000); 
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getText") {
        const textData = getPrivacyText();
        sendResponse({ text: textData });
    }
    // This return true is MANDATORY to keep the connection open for the response
    return true; 
});
document.getElementById('scanBtn').addEventListener('click', async () => {
    const loader = document.getElementById('loader');
    const resultDiv = document.getElementById('result');
    const scanBtn = document.getElementById('scanBtn');

    loader.style.display = "block";
    resultDiv.innerText = "";
    scanBtn.disabled = true;

    try {
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        
        // Step 1: Get text from Content Script
        chrome.tabs.sendMessage(tab.id, { action: "getText" }, (response) => {
            if (chrome.runtime.lastError) {
                showError("Refresh the webpage and try again.");
                return;
            }

            // Step 2: Send text to Background for Gemini
            chrome.runtime.sendMessage({ action: "analyzeText", text: response.text }, (apiResponse) => {
                loader.style.display = "none";
                scanBtn.disabled = false;
                
                if (apiResponse.success) {
                    resultDiv.innerText = apiResponse.data;
                } else {
                    showError(apiResponse.error);
                }
            });
        });
    } catch (e) {
        showError(e.message);
    }

    function showError(msg) {
        loader.style.display = "none";
        scanBtn.disabled = false;
        resultDiv.innerText = msg;
        resultDiv.style.color = "red";
    }
});
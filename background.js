const GEMINI_API_KEY = "AIzaSyAyaibat3atepsMVTHtj-64VIljbQkku88"; 
const API_URL = `https://generativelanguage.googleapis.com/v1beta/${MODEL_NAME}:generateContent?key=${GEMINI_API_KEY}`;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "analyzeText") {
        analyzeWithGemini(request.text)
            .then(result => sendResponse(result))
            .catch(error => {
                console.error("Analysis Error:", error);
                sendResponse({ success: false, error: error.message });
            });
        return true; 
    }
});

async function analyzeWithGemini(text) {
    // Simplify the prompt for testing
    const prompt = `Summary of this text in 3 points: ${text}`;

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }]
            })
        });

        const data = await response.json();
        
        // If you get a 404 or "Not Found", this log will tell us exactly why
        console.log("Gemini API Response:", data);

        if (data.error) {
            return { success: false, error: `API Error: ${data.error.message}` };
        }

        const analysis = data.candidates[0].content.parts[0].text;
        return { success: true, data: analysis };
    } catch (error) {
        return { success: false, error: "Fetch Error: " + error.message };
    }
}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PolicySchield AI | Professional Docs</title>
    <style>
        :root {
            --saffron: #FF9933;
            --white: #FFFFFF;
            --india-green: #138808;
            --cyber-blue: #00d4ff;
            --dark-bg: #0d1117;
            --glass-bg: rgba(255, 255, 255, 0.05);
        }

        body {
            font-family: 'Inter', -apple-system, sans-serif;
            background-color: var(--dark-bg);
            color: #c9d1d9;
            margin: 0;
            padding: 0;
            overflow-x: hidden;
        }

        /* Animated Header Glow */
        .header-glow {
            background: linear-gradient(90deg, var(--saffron), var(--white), var(--india-green));
            height: 6px;
            width: 100%;
            box-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
            position: sticky;
            top: 0;
            z-index: 100;
        }

        .container {
            max-width: 1000px;
            margin: 0 auto;
            padding: 60px 20px;
        }

        /* Pulsing Dev Badge */
        .dev-status {
            display: inline-flex;
            align-items: center;
            background: rgba(255, 153, 51, 0.1);
            border: 1px solid var(--saffron);
            color: var(--saffron);
            padding: 8px 16px;
            border-radius: 50px;
            font-size: 0.85rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            animation: pulse 2s infinite;
            margin-bottom: 30px;
        }

        @keyframes pulse {
            0% { box-shadow: 0 0 0 0 rgba(255, 153, 51, 0.4); }
            70% { box-shadow: 0 0 0 10px rgba(255, 153, 51, 0); }
            100% { box-shadow: 0 0 0 0 rgba(255, 153, 51, 0); }
        }

        h1 {
            font-size: 3.5rem;
            background: linear-gradient(to right, #fff, var(--cyber-blue));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin: 0;
        }

        .tagline {
            font-size: 1.5rem;
            color: #8b949e;
            margin-bottom: 50px;
        }

        /* Glassmorphism Cards */
        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 25px;
            margin: 40px 0;
        }

        .card {
            background: var(--glass-bg);
            border: 1px solid rgba(255, 255, 255, 0.1);
            padding: 30px;
            border-radius: 12px;
            backdrop-filter: blur(10px);
            transition: all 0.3s ease;
        }

        .card:hover {
            border-color: var(--cyber-blue);
            transform: translateY(-5px);
            background: rgba(255, 255, 255, 0.08);
        }

        h2 {
            color: var(--cyber-blue);
            border-bottom: 1px solid #30363d;
            padding-bottom: 10px;
            margin-top: 60px;
        }

        /* Terminal Style Code */
        .terminal {
            background: #161b22;
            border-radius: 8px;
            border: 1px solid #30363d;
            padding: 20px;
            font-family: 'Fira Code', monospace;
            position: relative;
        }

        .terminal-header {
            display: flex;
            gap: 8px;
            margin-bottom: 15px;
        }

        .dot { width: 12px; height: 12px; border-radius: 50%; }
        .red { background: #ff5f56; }
        .yellow { background: #ffbd2e; }
        .green { background: #27c93f; }

        .code-keyword { color: #d73a49; }
        .code-func { color: #b392f0; }
        .code-str { color: #9ecbff; }

        .details-list {
            list-style: none;
            padding: 0;
        }

        .details-list li {
            padding-left: 25px;
            position: relative;
            margin-bottom: 12px;
        }

        .details-list li::before {
            content: "▹";
            position: absolute;
            left: 0;
            color: var(--cyber-blue);
        }

        .footer {
            text-align: center;
            padding: 100px 0 40px;
            color: #484f58;
            font-size: 0.9rem;
        }
    </style>
</head>
<body>

<div class="header-glow"></div>

<div class="container">
    <div class="dev-status">
        <span style="margin-right: 8px;">●</span> System Status: Alpha Development
    </div>

    <h1>PolicySchield AI</h1>
    <div class="tagline">Advanced Neural Auditor for the Cyber-Bharat Era 🛡️</div>

    <h2>01. Project Evolution</h2>
    <p>PolicySchield is an open-source initiative designed to bridge the gap between complex legal privacy documents and the end-user. Utilizing <strong>Gemini 1.5 Flash (v1beta)</strong>, it executes context-aware scraping and high-speed inference directly within the browser ecosystem.</p>

    <div class="grid">
        <div class="card">
            <h3 style="color: var(--saffron);">Neural Summarization</h3>
            <p>Goes beyond keyword matching. It understands intent, jurisdiction, and data retention risks through LLM reasoning.</p>
        </div>
        <div class="card">
            <h3 style="color: var(--white);">Vedic-Futurist UI</h3>
            <p>Designed for the next billion users, combining high-contrast glassmorphism with traditional Indian aesthetic cues.</p>
        </div>
        <div class="card">
            <h3 style="color: var(--india-green);">Low-Latency Edge</h3>
            <p>Engineered for 16GB RAM environments with aggressive memory management and asynchronous message passing.</p>
        </div>
    </div>

    <h2>02. Technical Deep-Dive</h2>
    <ul class="details-list">
        <li><strong>Runtime Injection:</strong> Uses <code>chrome.scripting</code> for dynamic content script injection across <code>&lt;all_urls&gt;</code>.</li>
        <li><strong>Chunked Processing:</strong> Automatically handles DOM strings up to 15,000 characters to prevent API token overflow.</li>
        <li><strong>Security Model:</strong> Implements Strict CSP (Content Security Policy) and <code>host_permissions</code> for secure Google Cloud communication.</li>
        <li><strong>Future Integration:</strong> Prepared for <strong>Supabase</strong> integration for cross-device policy history.</li>
    </ul>

    <h2>03. Deployment Instructions</h2>
    <div class="terminal">
        <div class="terminal-header">
            <div class="dot red"></div>
            <div class="dot yellow"></div>
            <div class="dot green"></div>
        </div>
        <span class="code-comment">// Fetch and Load</span><br>
        git clone <span class="code-str">https://github.com/your-username/policy-schield</span><br><br>
        <span class="code-comment">// Environment Configuration (background.js)</span><br>
        <span class="code-keyword">const</span> <span class="code-func">API_KEY</span> = <span class="code-str">"REPLACE_WITH_GOOGLE_AI_STUDIO_KEY"</span>;<br>
        <span class="code-keyword">const</span> <span class="code-func">MODEL</span> = <span class="code-str">"gemini-1.5-flash"</span>;
    </div>

    <h2>04. Roadmap & Development</h2>
    <p>Currently in <strong>v0.1.0-alpha</strong>. Ongoing work includes:</p>
    <ul class="details-list">
        <li>OCR support for policy images using <strong>Tesseract.js</strong>.</li>
        <li>Voice-command interface via the <strong>Kranti AI</strong> router.</li>
        <li>Dark/Light mode persistence via <code>chrome.storage.local</code>.</li>
    </ul>

    <div class="footer">
        <p>A "Kranti AI" Ecosystem Project | Developed by Batch of 2026 Diploma Candidate</p>
        <p>Architected for the High-Performance Indian Web.</p>
    </div>
</div>

</body>
</html>

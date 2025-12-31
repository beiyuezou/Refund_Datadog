# Refund_Datadog (AI-Powered Refund Assistant)

[![Datadog Enabled](https://img.shields.io/badge/Datadog-Enabled-blueviolet.svg)](https://www.datadoghq.com/)
[![AI Model](https://img.shields.io/badge/AI-Gemini_3.0_Flash-blue.svg)](https://ai.google.dev/)

Refund_Datadog is a professional AI-driven application designed to streamline the process of requesting refunds for travel, hotels, and services. By leveraging a multi-agent architectural approach, it automates the journey from raw evidence extraction to generating professional legal-style refund letters.
<img width="1459" height="720" alt="截屏2025-12-20 上午11 00 17" src="https://github.com/user-attachments/assets/4d5afc80-a515-488d-809f-de29bd0ef52c" />

---

## 🚀 Core Features

- **Multi-Agent AI Workflow**:
  - **Evidence Collector**: Extracts receipts, transaction IDs, and merchant details from images, PDFs, and notes.
  - **Policy Analyst**: Cross-references user issues with airline/hotel policies (powered by Google Search integration).
  - **Letter Generator**: Produces professional, persuasive refund request letters tailored to the situation.
- **Voice & Multimedia Support**: Record voice notes or upload images/documents as evidence.
- **Datadog Integration**: Full Real User Monitoring (RUM), Session Replay, and error tracking for enterprise-grade stability.
- **Privacy First**: All case data is stored locally using **IndexedDB**. No personal documents are stored on a central server.
- **Template System**: Ready-to-use templates for common scenarios (Flight cancellation, Hotel hygiene, etc.).

---

## 🛠 Tech Stack

- **Frontend**: React 18, Vite, TypeScript
- **Styling**: Tailwind CSS
- **AI Core**: Google Gemini SDK (`gemini-3.0-flash`)
- **Monitoring**: Datadog RUM, Datadog Logs, Session Replay
- **Database**: IndexedDB (Browser Local Storage)

---

## 📊 Monitoring & Observability
<img width="1066" height="626" alt="截屏2026-01-01 上午3 58 11" src="https://github.com/user-attachments/assets/083bed43-9728-46ce-b7ad-a935cb89040d" />
<img width="1071" height="718" alt="截屏2026-01-01 上午4 02 06" src="https://github.com/user-attachments/assets/3bb23eef-9a28-4a2c-9ef3-61ee5b2e3350" />

This project is instrumented with **Datadog** for comprehensive monitoring:

- **RUM (Real User Monitoring)**: Tracks user journeys and performance metrics.
- **Session Replay**: 20% sampled visual playback to debug UX issues.
- **AI Performance**: Custom metrics tracking latency and success rates of individual AI agents (`refund.agent.extractEvidence`, etc.).
- **Error Tracking**: Automated error reporting for both browser and AI service failures.

---

## ⚙️ Getting Started

### 📋 Prerequisites

- Node.js (v18+)
- npm or yarn
- Google AI Studio API Key ([Get it here](https://aistudio.google.com/))
- Datadog Account (Optional)

### 💻 Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/beiyuezou/Refund_Datadog.git
   cd Refund_Datadog
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the root directory based on `.env.example`:

   ```bash
   cp .env.example .env
   ```

   Fill in your credentials:

   ```env
   VITE_GEMINI_API_KEY=your_gemini_api_key
   VITE_DATADOG_APPLICATION_ID=your_id
   VITE_DATADOG_CLIENT_TOKEN=your_token
   VITE_DATADOG_SITE=us5.datadoghq.com
   ```

4. **Launch Application**:

   ```bash
   npm run dev
   ```

---

## 🤖 Multi-Agent Workflow

The system uses a sequential agent flow to ensure high accuracy:

1. **Agent 1 (Extraction)**: Analyzes files/notes -> Returns structured JSON data.
2. **Agent 2 (Reasoning)**: Uses the extracted data + Web Search -> Generates a policy-backed analysis.
3. **Agent 3 (Synthesis)**: Uses the analysis -> Crafts the final professional letter.

---
##Try it:https://refund-multi-agents-410984109048.us-west1.run.app
---

## 📜 License

This project is for educational and practical use. Please ensure you comply with merchant TOS when requesting refunds.

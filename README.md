# 🎯 InsightX - Professional API Monitoring & Analytics

[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.x-646CFF?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

**InsightX** is a cutting-edge API monitoring platform designed for modern engineering teams. It provides deep visibility into your API ecosystem with real-time analytics, AI-driven anomaly detection, and enterprise-grade reporting.

---

## 🚀 Key Features

### 📊 Real-Time Monitoring
*   **Unified Dashboard**: A high-level view of your entire API infrastructure.
*   **Live Metrics**: Track requests per second, error rates, and latency distributions (P50, P95, P99).
*   **Endpoint Health**: Automated health checks for all your critical endpoints.

### 🤖 AI-Powered Insights
*   **Anomaly Detection**: Automatically detect unusual traffic patterns and potential security threats.
*   **Intelligent Recommendations**: AI-generated insights to optimize endpoint performance and reduce errors.
*   **Predictive Scaling**: Forecast future traffic based on historical data trends.

### 🛠️ Developer-First Experience
*   **Easy Integration**: Plug-and-play SDKs for major frameworks (Node.js, Python, Go).
*   **Interactive Documentation**: Comprehensive API docs with built-in testing capabilities.
*   **Alerting System**: Custom alert rules via Slack, Email, or Webhooks.

---

## 📦 Tech Stack

- **Frontend Core**: React 19 + TypeScript
- **Build Tooling**: Vite 7
- **Styling**: Tailwind CSS 4 + Shadcn/UI
- **Data Visualization**: Recharts
- **Icons**: Lucide React
- **Routing**: React Router 7
- **State Management**: Context API / Hooks

---

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/insightx-frontend.git
   cd insightx-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment**
   Create a `.env` file in the root directory:
   ```env
   VITE_API_BASE_URL=https://api.insightx.in
   ```

4. **Start Development Server**
   ```bash
   npm run dev
   ```

5. **Build for Production**
   ```bash
   npm run build
   ```

---

## 🏗️ Project Structure

```text
src/
├── components/          # Reusable UI components
│   ├── dashboard/       # Dashboard-specific components
│   └── ui/              # Base UI elements (Shadcn/UI)
├── Pages/               # Page-level components
│   ├── Dashboard/       # Dashboard sub-pages (Home, Analytics, etc.)
│   └── Home.tsx         # Marketing Landing Page
├── AppRouter/           # Route configuration
├── styles/              # Global styles and tailwind config
└── App.tsx              # Main Application Entry
```

---

## 🛡️ Security & Reliability

InsightX is built with a security-first mindset:
- **SOC 2 Type II Compliant** (Architecture standards)
- **End-to-End Encryption** for all monitoring data
- **99.99% Uptime** guarantee

---

## 🤝 Contributing

We welcome contributions! Please see our [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

---

<p align="center">
  Built by <a href="https://adityasingh.xyz">Aditya Singh</a>.
</p>

# Logic Loop — Intelligent Review Automation

Logic Loop is a premium reputation management platform designed to help local businesses automate their 5-star growth. It captures positive reviews on autopilot and intercepts negative ones instantly.

## 🚀 Features

- **Automated 5-Star Growth**: Seamlessly capture positive reviews across Google Maps, Facebook, and Yelp.
- **Real-time Crisis Control**: Identify negative reviews in real-time and alert your team instantly via Email or SMS.
- **AI-Powered Engagement**: Use specialized AI to craft personalized, brand-aligned responses to positive feedback automatically.
- **Optimized Onboarding**: A high-conversion multi-step form to qualify leads and trigger custom reputation audits.
- **Email Notifications**: Integrated with EmailJS for instant lead notifications and customer confirmations.

## 🛠️ Performance Optimizations

- **Route-based Code Splitting**: Lazy loading of complex modules to ensure lightning-fast initial page loads.
- **Logic Memoization**: Optimized React performance using `useMemo` and `useCallback`.
- **Static Data Strategies**: Efficient memory management via static extraction of configuration data.

## 💻 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/moulikydv/logicloop.git
   cd logicloop
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Setup Environment Variables:
   Create a `.env.local` file in the root directory and add your Gemini API key:
   ```env
   VITE_GEMINI_API_KEY=your_actual_key_here
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

## 📧 Email Integration Setup

This project uses EmailJS. To make the onboarding form functional, update the following keys in `components/OnboardingPage.tsx`:

- `SERVICE_ID`
- `TEMPLATE_ID`
- `PUBLIC_KEY`

---

Built with React, Vite, Tailwind CSS, and Framer Motion.

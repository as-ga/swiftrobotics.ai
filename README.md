# 👗 Fashion News Monitoring Agent

An AI-powered news monitoring application that fetches the latest fashion and retail news, filters irrelevant articles using Gemini AI, and generates concise, structured reports.

Built as part of the Swift Robotics Technical Assessment.

## ✨ Features

- 🌍 Select a country
- 📰 Choose topics to monitor
- 🤖 AI-powered filtering & summarization
- 🚫 Removes duplicate and irrelevant news
- 📊 Importance classification (High / Medium / Low)
- 🔗 Direct link to original article
- ⚡ Modern Next.js + Express architecture

## Tech Stack

### Frontend

- Next.js (App Router)
- TypeScript
- Tailwind CSS

### Backend

- Node.js
- Express.js
- TypeScript

### AI

- Google Gemini 2.5 Flash

### External API

- NewsAPI

## Project Structure

```
fashion-news-monitor/

├── client/
│   ├── app/
│   ├── components/
│   ├── lib/
│   └── types/
│
├── server/
│   ├── src/
│   │
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── config/
│   └── server.ts
│
└── README.md
```

## Workflow

```
User
    ↓
Select Country & Topics
    ↓
Next.js Frontend
    ↓
Express API Gateway
    ↓
NewsAPI
    ↓
Gemini AI
    ↓
Filtered + Summarized Report
    ↓
Frontend Dashboard
```

## API

### Generate Report

```
POST /api/news/generate-report
```

### Request

```json
{
  "country": "India",
  "topics": ["fashion", "retail", "luxury"]
}
```

### Response

```json
{
  "statusCode": 200,
  "message": "Report generated successfully",
  "data": [
    {
      "title": "",
      "summary": "",
      "importance": "High",
      "source": "",
      "url": ""
    }
  ]
}
```

## Future Improvements

- User Authentication
- Saved Reports
- Scheduled Monitoring
- Email Notifications
- Slack Integration
- Telegram Bot
- Multi-country Dashboard
- Redis Caching
- PostgreSQL Storage
- Competitor Tracking
- Sentiment Analysis
- Trending Topic Detection

## Local Setup

### Clone

```bash
git clone https://github.com/as-ga/swiftrobotics.ai.git
```

### Backend

```bash
cd server
pnpm install
pnpm run dev
```

### Frontend

```bash
cd client
pnpm install
pnpm run dev
```

## Environment Variables

Backend

```
PORT=
NEWS_API_KEY=
GEMINI_API_KEY=
```

## Author

Ashutosh Gaurav

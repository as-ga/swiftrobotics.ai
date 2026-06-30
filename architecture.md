# Architecture

## High-Level Architecture

```
                +--------------------+
                |    Next.js UI      |
                +---------+----------+
                          |
                          |
                          ▼
                +--------------------+
                |  Express API       |
                |   Gateway          |
                +---------+----------+
                          |
          +---------------+---------------+
          |                               |
          ▼                               ▼
 +------------------+           +------------------+
 |    NewsAPI       |           |   Gemini AI      |
 | Fetch Articles   |           | Summarization    |
 +------------------+           +------------------+
          |                               |
          +---------------+---------------+
                          |
                          ▼
                +--------------------+
                | Filtered Articles  |
                | AI Summary         |
                | Importance Score   |
                +---------+----------+
                          |
                          ▼
                +--------------------+
                |   JSON Response    |
                +---------+----------+
                          |
                          ▼
                +--------------------+
                | Next.js Dashboard  |
                +--------------------+
```

## Request Flow

```
User
    ↓
Frontend
    ↓
POST /generate-report
    ↓
Controller
    ↓
News Service
    ↓
NewsAPI
    ↓
AI Service
    ↓
Gemini
    ↓
Structured JSON
    ↓
Frontend
```

## Components

### Frontend

- ReportForm
- NewsCard
- ReportList
- Loading

### Backend

- Controller
- Route
- News Service
- AI Service
- Prompt Utility

## Design Decisions

### Why Next.js?

- Fast development
- Component-based UI
- Production-ready

### Why Express?

- Lightweight
- Easy API integration
- Clean architecture

### Why Gemini?

- Fast summarization
- Strong reasoning
- Free tier support

### Why NewsAPI?

- Reliable news source
- Simple REST API
- Good free tier

## Future Architecture

```
Users
    ↓
Next.js
    ↓
API Gateway
    ↓
Redis Cache
    ↓
Queue
    ↓
Workers
    ↓
Gemini
    ↓
PostgreSQL
    ↓
Email / Slack / Telegram
```

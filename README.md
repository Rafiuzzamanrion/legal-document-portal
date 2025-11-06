# Legal Document Search Portal
### Legal Assistant Tool - Full Stack Assignment

**Developer:** Rafiuzzamanrion  
**Date:** November 6, 2025  
**Tech Stack:** Next.js 15 (React 19) + Express.js (Node.js)  
**Architecture:** MVC Pattern (Backend) + Component-Based (Frontend)

---

## 🌐 Live Demo

**Frontend:** https://legal-document-portal-s67w.vercel.app/
**Backend API:** https://legal-document-portal.vercel.app/
**GitHub:** https://github.com/Rafiuzzamanrion/legal-document-portal.git

---

## 📋 Overview

A full-stack web application for searching legal documents with summaries. Built using **MVC architecture** on the backend and **component-based architecture** on the frontend.

### Key Features
- ✅ Intelligent search with relevance scoring
- ✅ Debounced auto-search (700ms)
- ✅ 3 hardcoded legal documents (mocked backend)
- ✅ Real-time loading states and error handling
- ✅ Responsive UI with Tailwind CSS

---

## 🛠 Technology Stack

**Frontend:**
- Next.js 15.1.3 (React 19, TypeScript 5.7)
- Tailwind CSS 3.4.15
- Custom Hooks (useSearch)

**Backend:**
- Express.js 4.21.2 (Node.js 18+)
- **MVC Architecture Pattern**
- No Database (Mocked Data)



## 📁 Project Structure

```
legal-document-portal/
│
├── backend/                    # MVC Backend
│   ├── src/
│   │   ├── models/            # M - Data Layer
│   │   │   └── documents.js   # 3 hardcoded legal docs
│   │   ├── controllers/       # C - Request Handlers
│   │   │   └── documentController.js
│   │   ├── services/          # Business Logic
│   │   │   └── searchService.js
│   │   ├── routes/            # URL Routing
│   │   │   └── api.js
│   │   ├── middlewares/       # Validation & Errors
│   │   │   ├── validator.js
│   │   │   └── errorHandler.js
│   │   ├── config/            # Configuration
│   │   └── utils/             # Utilities
│   ├── server.js              # Entry Point
│   └── package.json
│
├── frontend/                   # Next.js Frontend
│   ├── src/
│   │   ├── app/               # Pages
│   │   ├── components/        # UI Components
│   │   ├── hooks/             # Custom Hooks
│   │   ├── services/          # API Layer
│   │   ├── types/             # TypeScript Types
│   │   └── utils/             # Helpers
│   └── package.json
│
├── scripts/                    # Run Scripts
│   ├── start.sh               # Unix/Mac
│   └── start.bat              # Windows
│
└── README.md
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js ≥18.18.0
- npm ≥9.0.0

### Installation

**Option 1: Using Run Script (Recommended)**

```bash
# Mac/Linux
chmod +x scripts/start.sh
./scripts/start.sh

# Windows
scripts\start.bat
```

**Option 2: Manual Setup**

```bash
# Backend
cd backend
npm install
npm start                      # Port 5000

# Frontend (new terminal)
cd frontend
npm install
npm run dev                    # Port 3000
```

### Access Application
- **Frontend:** http://localhost:3000
- **Backend:** http://localhost:5000

---

## 🔧 Environment Variables

### Backend Configuration

Create `backend/.env` file:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# CORS Configuration
CORS_ORIGIN=http://localhost:3000

# Logging
LOG_LEVEL=info

# Search Configuration
SEARCH_SIMULATED_DELAY=700
```

### Frontend Configuration

Create `frontend/.env` file:

```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:5000

# Environment
NODE_ENV=development
```

**Note:** These files are automatically created when using the run scripts (`start.sh` or `start.bat`).
```
## 📡 API Endpoints

### GET /api/generate
Search legal documents

**Request:**
```json
{
  "query": "contract dispute"
}
```

**Response:**
```json
{
  "success": true,
  "query": "contract dispute",
  "summary": "Based on your query...",
  "documents": [...],
  "totalResults": 1
}
```

### Routes
**File:** `backend/src/routes/api.js`

```javascript
const router = express.Router();

// Map endpoints to controllers
router.post('/generate', validateSearchQuery, documentController.generate);
```

---

## ✅ Assignment Requirements

| Requirement | Status | Implementation |
|------------|--------|----------------|
| **Frontend UI** | ✅ | React (Next.js 15) with TypeScript |
| **Backend API** | ✅ | Express.js with MVC architecture |
| **3 Hardcoded Docs** | ✅ | In `models/documents.js` |
| **Mock Responses** | ✅ | Relevance scoring + AI summaries |
| **API Integration** | ✅ | Frontend ↔ Backend via fetch |
| **Loading State** | ✅ | Animated spinner component |
| **Error Messages** | ✅ | User-friendly error display |
| **Clean Layout** | ✅ | Tailwind CSS responsive design |
| **Setup Instructions** | ✅ | Detailed README |
| **Run Scripts** | ✅ | `start.sh` + `start.bat` |

---

## 🎯 Code Quality Highlights

### Backend (MVC Pattern)
- ✅ **Separation of Concerns** - Models, Controllers, Services
- ✅ **Functional Programming** - No classes, pure functions
- ✅ **Middleware Pipeline** - Validation → Controller → Service → Model
- ✅ **Centralized Error Handling** - Error middleware
- ✅ **Input Validation** - Request validation layer
- ✅ **Logging** - Request/response logging

### Frontend (Component-Based)
- ✅ **TypeScript** - Full type safety
- ✅ **Custom Hooks** - Reusable logic (useSearch)
- ✅ **Service Layer** - API abstraction
- ✅ **Debounce** - Optimized search (700ms)
- ✅ **Error Boundaries** - Graceful error handling
- ✅ **Responsive Design** - Mobile-friendly

---

## 🧪 Testing

### Test Backend
```bash

# Search
curl -X GET http://localhost:5000/api/generate \
  -H "Content-Type: application/json" \
  -d '{"query": "contract"}'
```

### Test Frontend
1. Open http://localhost:3000
2. Search: "contract dispute"
3. Verify results display

---

## 🐛 Troubleshooting

**CORS error:**
- Check backend `.env` has `CORS_ORIGIN=http://localhost:3000`
- Restart backend

**Module not found:**
```bash
cd backend && npm install
cd frontend && npm install
```

---

## 📊 Performance

- **Search Speed:** <1 second
- **Debounce Delay:** 700ms
- **API Response Time:** ~800ms (simulated)
- **Build Time:** ~30 seconds (frontend)

---

## 👨‍💻 Author

**Rafiuzzaman Rion**  
Full Stack Developer



## 🎯 Quick Reference

```bash
# Clone
git clone https://github.com/Rafiuzzamanrion/legal-document-portal

# Quick start
./scripts/start.sh         # Mac/Linux
scripts\start.bat          # Windows

# Access
http://localhost:3000      # Frontend
http://localhost:5000      # Backend
```

---

**Built with MVC Architecture + React Components** 🏗️  
**Ready for Production** ✅  
**Deployed on Vercel** 🚀


📚 REFERENCES - MOCKED LEGAL DOCUMENTS

[1] Smith v. Johnson Construction LLC, CV-2023-001234 (Superior Court of 
    California, 2023). Fictional case created for demonstration purposes. 
    Generated by AI for assessment use in Legal Document Search Portal.

[2] State v. Anderson, CR-2022-005678 (State Court of Appeals, 2022). 
    Fictional case created for demonstration purposes. Generated by AI for 
    Assessment use in the Legal Document Search Portal.

[3] Martinez v. Global Tech Industries, CV-2023-009876 (Federal District 
    Court, 2023). Fictional case created for demonstration purposes. 
    Generated by AI for assessment use in Legal Document Search Portal.
    
[4] The Readme.md file was also created by AI at my command





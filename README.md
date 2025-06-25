
# 🚗 Uber App (AI-Enhanced)

A full-stack ride-hailing application inspired by Uber, supporting user and driver (captain) accounts, real-time ride requests, AI-powered fare calculation, map-based location services, and an integrated AI chatbot assistant.

---

## 📚 Table of Contents

- [Features](#features)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [File Structure](#file-structure)
- [AI Model Overview](#ai-model-overview)
- [License](#license)

---

## ✨ Features

### 👤 User and Driver (Captain) Authentication

- Register, login, logout, and profile management
- JWT-based secure authentication

### 🚕 Ride Management

- Book rides, estimate fare, manage ride status
- OTP-based ride verification

### 🧭 Mapping Services

- Address autocomplete and suggestions
- Coordinate retrieval and distance/time calculation between locations

### ⚛️ Modern Frontend

- Built with React + Vite for a fast and modern UI/UX

---

### 🤖 AI Features

- **AI-Based Fare Estimation**  
  Predicts fares using a trained machine learning model with `TensorFlow.js`, based on ride distance and duration. Ensures smarter pricing than traditional flat-rate models.

- **AI Chatbot Assistant**  
  An AI chatbot (powered by OpenAI GPT) integrated into the frontend to assist users with ride-related queries, help topics, and FAQs.

- **Modular AI API**  
  The backend exposes an API route (`/api/predict-fare`) that dynamically calculates fares using the trained model in real-time.

---

## 🏗️ Architecture

### Frontend

- Built with **React.js + Vite**
- Located in the `/frontend` directory
- Includes the AI Chatbot Component (`AIChatbot.jsx`) using OpenAI’s ChatGPT API via backend proxy

### Backend

- Built with **Node.js + Express**
- Located in the `/Backend` directory
- Includes RESTful APIs for users, captains, rides, maps, and AI prediction
- Integrates `@tensorflow/tfjs-node` for local AI model inference
- Proxy API to OpenAI for chatbot communication

---

## 🚀 Getting Started

### 🔧 Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

### 📦 Setup

```bash
# 1. Clone the repository
git clone https://github.com/Aadi1909/uber-app.git
cd uber-app

# 2. Install dependencies

# Frontend
cd frontend
npm install

# Backend
cd ../Backend
npm install
```

### ▶️ Run the app

#### Frontend

```bash
npm run dev
```

Visit: [http://localhost:5173](http://localhost:5173)

#### Backend

```bash
npm start
```

Runs at: [http://localhost:3000](http://localhost:3000)

---

## 🧪 API Endpoints

### User & Captain Auth
- `POST /users/register`
- `POST /users/login`
- `POST /captains/register`
- `POST /captains/login`

### Ride Operations
- `POST /rides/create`
- `GET /rides/get-fare`
- `POST /rides/start`
- `POST /rides/end`
- `POST /rides/confirm`

### Map Services
- `POST /maps/get-coordinates`
- `POST /maps/get-distance-time`

### AI Services
- `POST /api/predict-fare` → Returns predicted fare using TensorFlow.js
- `POST /api/openai-proxy` → Handles chatbot queries (OpenAI GPT)

---

## 📁 File Structure

```bash
uber-app/
├── Backend/                 # Express backend
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── ai/
│   │   └── farePredictor.js # TensorFlow.js AI fare predictor
│   └── .env                 # Contains OpenAI API key
│
├── frontend/                # React + Vite frontend
│   ├── components/
│   │   └── AIChatbot.jsx    # AI assistant chatbot
│   └── App.jsx
│
└── README.md                # (You are here)
```

---

## 🧠 AI Model Overview

| Model Type   | Library         | Language |
|--------------|------------------|----------|
| Fare Model   | TensorFlow.js    | Node.js  |
| Chatbot      | OpenAI GPT-3.5   | Proxy via Node.js |

- The fare prediction model uses TensorFlow.js and is trained on sample ride data.
- The chatbot uses OpenAI's `gpt-3.5-turbo` API and responds to user queries within the frontend UI.

---

## 📜 License

**MIT License**

Feel free to use, contribute, or fork this project.  
For questions or contributions, please open an issue or submit a pull request.

---

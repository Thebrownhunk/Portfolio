# 🚀 MERN Stack Developer Portfolio

A premium, full-stack developer portfolio built with MongoDB, Express.js, React.js, and Node.js.
Dark cyberpunk theme with `#18d26e` neon green accents.

---

## 📁 Project Structure

```
portfolio/
├── backend/           ← Node.js + Express REST API
│   ├── models/        ← Mongoose schemas (Contact, Project)
│   ├── routes/        ← API routes
│   ├── .env.example   ← Environment variable template
│   └── server.js      ← Entry point
└── frontend/          ← React.js + Tailwind CSS
    └── src/
        ├── components/ ← Navbar, Footer, shared UI
        ├── pages/      ← Home, About, Education, Projects, Contact
        └── App.jsx     ← Router root
```

---

## ⚡ Quick Start

### 1. Backend Setup

```bash
cd backend
cp .env.example .env        # Add your MONGO_URI
npm install
npm run dev                 # Runs on http://localhost:5000
```

### 2. Frontend Setup

```bash
cd frontend
echo "VITE_API_URL=http://localhost:5000/api" > .env
npm install
npm run dev                 # Runs on http://localhost:3000
```

### 3. Seed Projects (optional)

```bash
curl -X POST http://localhost:5000/api/projects/seed
```

---

## 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| POST | `/api/contact` | Save contact message → MongoDB |
| GET | `/api/contact` | List all messages (admin) |
| GET | `/api/projects` | Fetch all projects |
| GET | `/api/projects?category=fullstack` | Filter by category |
| POST | `/api/projects` | Create project (admin) |
| POST | `/api/projects/seed` | Seed demo projects |

---

## 🎨 Customization

### Update Your Info
Edit `frontend/src/data/portfolio.js`:
- `personalInfo` — name, role, bio, email, location
- `skills` — tech stack with proficiency percentages
- `education` — timeline items
- `projects` — project cards (or fetch from MongoDB)

### Colors
Change `--green: #18d26e` in `frontend/src/index.css` to your accent color.

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, React Router v6, Framer Motion |
| Styling | Tailwind CSS v3, Custom CSS variables |
| Backend | Node.js, Express.js |
| Database | MongoDB + Mongoose |
| Security | Helmet, express-rate-limit, CORS |

---

## 📦 Deployment

**Backend** → Railway / Render / Heroku  
**Frontend** → Vercel / Netlify  
**Database** → MongoDB Atlas (free tier)

Set `VITE_API_URL` to your deployed backend URL before building frontend.

---

Built with 💚 by Karan Desai

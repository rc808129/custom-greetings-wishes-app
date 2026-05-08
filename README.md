# Custom-Greetings-&-Wishes-App

Full-stack custom greetingsand wishes web app with authentication, personalized templates, image sharing, and premium template features.

## Features

- Email, Google & Guest Authentication
- Profile Setup with Username & Profile Image Upload
- Categorized Greeting Templates (Birthday, Festival, Relationship)
- Live Preview with Username & Profile Image on Every Template
- Personalized Greeting Image Generation
- Social Sharing Functionality (WhatsApp, Email, etc.)
- Automatic Username & Profile Image Overlay
- Premium Template Access Control
- Subscription Popup for Locked Premium Templates
- Responsive Modern UI Design


## Tech Stack

### Frontend
- React-js
- Tailwind CSS
- React Router DOM
- Axios
- React Icons
- html2canvas-pro
- Firebase

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Cloudinary
- Multer
- bcryptjs
- dotenv
- cors


## Folder Structure

```bash
custom-greetings-wishes-webapp/

├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── utils/
│   │   └── app.js
│   │
│   ├── node_modules/
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── data/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   ├── firebase.js
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── public/
│   ├── node_modules/
│   ├── .env
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js
│
├── README.md
└── TECHNICAL_APPROACH.md
```


## Installation

### Clone Repository

git clone <repository-link>

### Frontend Setup

```
cd frontend
npm install
npm run dev
```

### Backend Setup

```
cd backend
npm install
npm start
```

## Environment Variables

Create a .env file in backend folder and add:

```env
PORT=
MONGO_URI=
JWT_SECRET=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

Create a .env file in frontend folder and add:

```env
VITE_API_BASE_URL=
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
VITE_FIREBASE_MEASUREMENT_ID=
```


## API Endpoints

### Authentication

POST /api/auth/signup

POST /api/auth/login

POST /api/auth/google

GET /api/auth/guest


### Profile

PUT /api/profile/steup

GET /api/profile/me

## Author

Raj Chaurasiya
# YouWare Backend API

Node.js Express backend with Firebase Admin SDK for secure server-side operations.

## Features

- ✅ Express.js server with CORS enabled
- ✅ Firebase Admin SDK integration
- ✅ Environment-based configuration
- ✅ Ready for Render deployment
- ✅ Health check endpoints
- ✅ Error handling middleware

## Environment Variables

Create a `.env` file with the following variables:

```env
# Firebase Admin SDK Configuration
FIREBASE_PROJECT_ID=youware-website
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-fbsvc@youware-website.iam.gserviceaccount.com
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"

# Server Configuration
PORT=3000
```

## Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Start production server
npm start
```

## API Endpoints

### Basic Routes
- `GET /` - Backend status
- `GET /api/test` - API test with Firebase connection status
- `GET /health` - Health check with server info

### Firebase Routes
- `GET /api/firebase-test` - Test Firebase connection

## Project Structure

```
/backend
├── server.js              # Main Express server
├── package.json           # Dependencies and scripts
├── .env.example           # Environment variables template
├── .gitignore             # Git ignore rules
├── README.md              # This file
└── src/
    └── firebase-admin.js  # Firebase Admin SDK initialization
```

## Render Deployment

1. **Push to GitHub** with the backend folder
2. **Create Render Web Service**:
   - Connect to your repository
   - Root directory: `/backend`
   - Build Command: `npm install`
   - Start Command: `npm start`
3. **Set Environment Variables** in Render dashboard:
   - `FIREBASE_PROJECT_ID`
   - `FIREBASE_CLIENT_EMAIL`
   - `FIREBASE_PRIVATE_KEY`
   - `PORT` (Render sets this automatically)

## Firebase Services Available

- `db` - Firestore database
- `auth` - Firebase Authentication
- `storage` - Firebase Storage

## Security

- ✅ No hardcoded credentials
- ✅ Environment variables for all secrets
- ✅ CORS properly configured
- ✅ Error handling middleware

## Development

```bash
# Start with file watching
npm run dev

# Test endpoints
curl http://localhost:3000/
curl http://localhost:3000/api/test
curl http://localhost:3000/health
```

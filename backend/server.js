import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { db, auth, storage } from './src/firebase-admin.js';

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON bodies

// Basic routes
app.get('/', (req, res) => {
  res.json({ message: 'Backend running', status: 'active' });
});

app.get('/api/test', (req, res) => {
  res.json({
    message: 'Backend API working',
    timestamp: new Date().toISOString(),
    firebase: {
      projectId: process.env.FIREBASE_PROJECT_ID,
      connected: !!db
    }
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Firebase test endpoint (optional - for testing Firebase connection)
app.get('/api/firebase-test', async (req, res) => {
  try {
    // Test Firestore connection
    const testDoc = await db.collection('test').doc('connection').get();
    res.json({
      message: 'Firebase connection successful',
      firestore: 'connected',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Firebase connection error:', error);
    res.status(500).json({
      message: 'Firebase connection failed',
      error: error.message
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Backend server running on port ${PORT}`);
  console.log(`📱 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🔥 Firebase Project: ${process.env.FIREBASE_PROJECT_ID}`);
  console.log(`🌐 Health check: http://localhost:${PORT}/health`);
});

export default app;

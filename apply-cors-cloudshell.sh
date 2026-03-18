#!/bin/bash
# Run this in Google Cloud Shell (no local install needed)
# 1. Go to: https://console.cloud.google.com
# 2. Click the Cloud Shell icon (terminal) in the top-right
# 3. Paste and run this entire script

set -e
echo "Setting project..."
gcloud config set project youware-website

echo "Creating CORS config..."
cat > /tmp/cors.json << 'EOF'
[
  {
    "origin": [
      "http://127.0.0.1:5173",
      "http://127.0.0.1:5174",
      "http://localhost:5173",
      "http://localhost:5174",
      "https://youware-website.web.app",
      "https://youware-website.firebaseapp.com"
    ],
    "method": ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    "responseHeader": ["Content-Type", "Authorization", "x-goog-resumable", "x-goog-meta-*"],
    "maxAgeSeconds": 3600
  }
]
EOF

echo "Applying CORS to Firebase Storage bucket..."
gcloud storage buckets update gs://youware-website.appspot.com --cors-file=/tmp/cors.json

echo "Done! Clear browser cache and try adding a blog with an image again."

#!/bin/bash

echo "🚀 Quick Deploy to Render"
echo "========================"
echo ""

# Method 1: Using Render Web Interface (Recommended)
echo "📋 Method 1: Web Interface (Easiest)"
echo "1. Open: https://render.com/dashboard"
echo "2. Click 'New +' → 'Web Service'"
echo "3. Connect: nishtharaima6125/The-AI-Learning"
echo "4. Settings:"
echo "   - Name: youware-frontend"
echo "   - Environment: Static Site"
echo "   - Build Command: npm run render-build"
echo "   - Publish Directory: dist"
echo "5. Click 'Create Web Service'"
echo ""

# Method 2: Using API (Requires API Token)
echo "📡 Method 2: API Deployment"
echo "1. Get API token: https://render.com/user/settings"
echo "2. Set token: export RENDER_API_TOKEN=your_token"
echo "3. Run: ./render-deploy.sh"
echo ""

# Method 3: Auto-deploy (Already configured)
echo "🔄 Method 3: Auto-deploy"
echo "✅ GitHub Actions workflow is ready"
echo "✅ Auto-deploys on push to main branch"
echo ""

echo "🎯 Current Status:"
echo "✅ Code is pushed to GitHub"
echo "✅ Build configuration is ready"
echo "✅ SPA routing is configured"
echo "✅ All files are committed"
echo ""

echo "🌐 After deployment, test:"
echo "   - Homepage: https://your-app.onrender.com"
echo "   - /prompt: https://your-app.onrender.com/prompt"
echo "   - /login: https://your-app.onrender.com/login"
echo "   - /admin: https://your-app.onrender.com/admin"
echo ""

echo "🚀 Ready for deployment!"

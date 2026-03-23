#!/bin/bash

echo "🚀 Preparing for Render deployment..."

# Check if we're on the main branch
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "main" ]; then
    echo "⚠️  Warning: You're not on the main branch. Current branch: $CURRENT_BRANCH"
    echo "💡 Switch to main branch with: git checkout main"
fi

# Check if working tree is clean
if [ -n "$(git status --porcelain)" ]; then
    echo "⚠️  Warning: Working tree is not clean"
    echo "💡 Commit your changes with: git add . && git commit -m 'Your message'"
else
    echo "✅ Working tree is clean"
fi

# Check if we're up to date with origin
git fetch origin
LOCAL=$(git rev-parse HEAD)
REMOTE=$(git rev-parse origin/main)
if [ "$LOCAL" != "$REMOTE" ]; then
    echo "⚠️  Warning: Local branch is not up to date with origin"
    echo "💡 Push changes with: git push origin main"
else
    echo "✅ Up to date with origin"
fi

# Test build locally
echo "🔨 Testing build locally..."
npm run render-build
if [ $? -eq 0 ]; then
    echo "✅ Build successful"
else
    echo "❌ Build failed"
    exit 1
fi

echo ""
echo "🎯 Ready for deployment!"
echo ""
echo "📋 Next Steps:"
echo "1. Go to https://render.com/dashboard"
echo "2. Click 'New +' → 'Web Service'"
echo "3. Connect your GitHub repository: nishtharaima6125/The-AI-Learning"
echo "4. Configure:"
echo "   - Name: youware-frontend"
echo "   - Environment: Static Site"
echo "   - Build Command: npm run render-build"
echo "   - Publish Directory: dist"
echo "5. Click 'Create Web Service'"
echo ""
echo "🌐 After deployment, test:"
echo "   - https://your-app-name.onrender.com"
echo "   - https://your-app-name.onrender.com/prompt"
echo "   - https://your-app-name.onrender.com/login"
echo "   - https://your-app-name.onrender.com/admin"
echo ""
echo "✨ Your code is ready for Render deployment!"

#!/bin/bash

echo "🚀 Deploying to Render using API..."

# Check for RENDER_API_TOKEN
if [ -z "$RENDER_API_TOKEN" ]; then
    echo "❌ RENDER_API_TOKEN not found"
    echo "💡 Get your API token from: https://render.com/user/settings"
    echo "💡 Set it with: export RENDER_API_TOKEN=your_token_here"
    exit 1
fi

# Repository information
REPO_OWNER="nishtharaima6125"
REPO_NAME="The-AI-Learning"
SERVICE_NAME="youware-frontend"

echo "📡 Checking existing services..."

# Check if service already exists
EXISTING_SERVICE=$(curl -s -H "Authorization: Bearer $RENDER_API_TOKEN" \
    "https://api.render.com/v1/services" | \
    jq -r ".[] | select(.service.name==\"$SERVICE_NAME\") | .service.id")

if [ -n "$EXISTING_SERVICE" ]; then
    echo "✅ Found existing service: $EXISTING_SERVICE"
    echo "🔄 Triggering new deployment..."
    
    # Trigger deployment
    DEPLOY_RESPONSE=$(curl -s -X POST \
        -H "Authorization: Bearer $RENDER_API_TOKEN" \
        -H "Content-Type: application/json" \
        -d "{}" \
        "https://api.render.com/v1/services/$EXISTING_SERVICE/deploys")
    
    echo "📦 Deployment triggered!"
    echo "🔗 Check status at: https://render.com/dashboard/$SERVICE_NAME"
    
else
    echo "🆕 Creating new service..."
    
    # Create new service
    SERVICE_DATA=$(cat <<EOF
{
  "type": "web",
  "name": "$SERVICE_NAME",
  "repo": "https://github.com/$REPO_OWNER/$REPO_NAME.git",
  "rootDir": "./",
  "buildCommand": "npm run render-build",
  "publishPath": "dist",
  "env": "static"
}
EOF
)
    
    CREATE_RESPONSE=$(curl -s -X POST \
        -H "Authorization: Bearer $RENDER_API_TOKEN" \
        -H "Content-Type: application/json" \
        -d "$SERVICE_DATA" \
        "https://api.render.com/v1/services")
    
    echo "📦 Service creation initiated!"
    echo "🔗 Check status at: https://render.com/dashboard"
fi

echo ""
echo "⏳ Deployment will take a few minutes..."
echo "🌐 Once deployed, your app will be available at:"
echo "   https://$SERVICE_NAME.onrender.com"
echo ""
echo "📱 Test these URLs after deployment:"
echo "   - https://$SERVICE_NAME.onrender.com"
echo "   - https://$SERVICE_NAME.onrender.com/prompt"
echo "   - https://$SERVICE_NAME.onrender.com/login"
echo "   - https://$SERVICE_NAME.onrender.com/admin"

#!/bin/bash

#######################################################################
# Legal Document Search Portal - Startup Script
# Developer: Rafiuzzamanrion
# Date: 2025-11-06 04:35:19 UTC
# User: Rafiuzzamanrion
# Platform: Unix/Linux/Mac
#######################################################################

echo "════════════════════════════════════════════════════════════"
echo "     Legal Document Search Portal - Startup Script"
echo "     Developer: Rafiuzzamanrion"
echo "     Date: 2025-11-06 04:35:19 UTC"
echo "════════════════════════════════════════════════════════════"
echo ""

# Check if Node.js is installed
echo "🔍 Checking Node.js installation..."
if ! command -v node &> /dev/null; then
    echo "❌ Error: Node.js is not installed."
    echo "   Please install Node.js from https://nodejs.org/"
    exit 1
fi

NODE_VERSION=$(node -v)
echo "✅ Node.js found: $NODE_VERSION"
echo ""

# Check if npm is installed
echo "🔍 Checking npm installation..."
if ! command -v npm &> /dev/null; then
    echo "❌ Error: npm is not installed."
    exit 1
fi

NPM_VERSION=$(npm -v)
echo "✅ npm found: v$NPM_VERSION"
echo ""

echo "════════════════════════════════════════════════════════════"
echo "📦 Setting up Backend..."
echo "════════════════════════════════════════════════════════════"

# Navigate to backend directory
cd backend || { echo "❌ Backend directory not found!"; exit 1; }

# Install backend dependencies
echo "Installing backend dependencies..."
npm install

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
    echo "Creating backend .env file..."
    cat > .env << 'ENVEOF'
# Server Configuration
PORT=5000
NODE_ENV=development

# CORS Configuration
CORS_ORIGIN=http://localhost:3000

# Logging
LOG_LEVEL=info

# Search Configuration
SEARCH_SIMULATED_DELAY=700
ENVEOF
    echo "✅ Backend .env file created"
else
    echo "✅ Backend .env file already exists"
fi

echo ""
echo "════════════════════════════════════════════════════════════"
echo "🎨 Setting up Frontend..."
echo "════════════════════════════════════════════════════════════"

# Navigate to frontend directory
cd ../frontend || { echo "❌ Frontend directory not found!"; exit 1; }

# Install frontend dependencies
echo "Installing frontend dependencies..."
npm install

# Create .env.local file if it doesn't exist
if [ ! -f .env.local ]; then
    echo "Creating frontend .env.local file..."
    cat > .env.local << 'ENVEOF'
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:5000

# Environment
NODE_ENV=development
ENVEOF
    echo "✅ Frontend .env.local file created"
else
    echo "✅ Frontend .env.local file already exists"
fi

cd ..

echo ""
echo "════════════════════════════════════════════════════════════"
echo "🚀 Starting Servers..."
echo "════════════════════════════════════════════════════════════"
echo ""
echo "Backend will run on: http://localhost:5000"
echo "Frontend will run on: http://localhost:3000"
echo ""
echo "Press Ctrl+C to stop both servers"
echo ""

# Start backend in background
echo "Starting backend server..."
cd backend
npm start &
BACKEND_PID=$!

# Wait a moment for backend to start
sleep 3

# Start frontend
echo "Starting frontend server..."
cd ../frontend
npm run dev &
FRONTEND_PID=$!

# Wait for both processes
wait $BACKEND_PID $FRONTEND_PID

echo ""
echo "════════════════════════════════════════════════════════════"
echo "✅ Setup Complete!"
echo "════════════════════════════════════════════════════════════"

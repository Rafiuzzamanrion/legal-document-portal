@echo off
REM ====================================================================
REM Legal Document Search Portal - Startup Script
REM Developer: Rafiuzzamanrion
REM Date: 2025-11-06 04:35:19 UTC
REM User: Rafiuzzamanrion
REM Platform: Windows (Command Prompt)
REM ====================================================================

echo ================================================================
echo      Legal Document Search Portal - Startup Script
echo      Developer: Rafiuzzamanrion
echo      Date: 2025-11-06 04:35:19 UTC
echo ================================================================
echo.

REM Check if Node.js is installed
echo Checking Node.js installation...
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo Error: Node.js is not installed.
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('node -v') do set NODE_VERSION=%%i
echo Node.js found: %NODE_VERSION%
echo.

REM Check if npm is installed
echo Checking npm installation...
where npm >nul 2>nul
if %errorlevel% neq 0 (
    echo Error: npm is not installed.
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('npm -v') do set NPM_VERSION=%%i
echo npm found: v%NPM_VERSION%
echo.

echo ================================================================
echo Setting up Backend...
echo ================================================================

REM Navigate to backend directory
cd backend
if %errorlevel% neq 0 (
    echo Error: Backend directory not found!
    pause
    exit /b 1
)

REM Install backend dependencies
echo Installing backend dependencies...
call npm install

REM Create .env file if it doesn't exist
if not exist .env (
    echo Creating backend .env file...
    (
        echo # Server Configuration
        echo PORT=5000
        echo NODE_ENV=development
        echo.
        echo # CORS Configuration
        echo CORS_ORIGIN=http://localhost:3000
        echo.
        echo # Logging
        echo LOG_LEVEL=info
        echo.
        echo # Search Configuration
        echo SEARCH_SIMULATED_DELAY=700
    ) > .env
    echo Backend .env file created
) else (
    echo Backend .env file already exists
)

echo.
echo ================================================================
echo Setting up Frontend...
echo ================================================================

REM Navigate to frontend directory
cd ..\frontend
if %errorlevel% neq 0 (
    echo Error: Frontend directory not found!
    pause
    exit /b 1
)

REM Install frontend dependencies
echo Installing frontend dependencies...
call npm install

REM Create .env.local file if it doesn't exist
if not exist .env.local (
    echo Creating frontend .env.local file...
    (
        echo # API Configuration
        echo NEXT_PUBLIC_API_URL=http://localhost:5000
        echo.
        echo # Environment
        echo NODE_ENV=development
    ) > .env.local
    echo Frontend .env.local file created
) else (
    echo Frontend .env.local file already exists
)

cd ..

echo.
echo ================================================================
echo Starting Servers...
echo ================================================================
echo.
echo Backend will run on: http://localhost:5000
echo Frontend will run on: http://localhost:3000
echo.
echo Press Ctrl+C to stop the servers
echo.

REM Start backend
echo Starting backend server...
start "Legal Document Backend" cmd /k "cd backend && npm start"

REM Wait for backend to start
timeout /t 3 /nobreak >nul

REM Start frontend
echo Starting frontend server...
start "Legal Document Frontend" cmd /k "cd frontend && npm run dev"

echo.
echo ================================================================
echo Setup Complete!
echo ================================================================
echo.
echo Two terminal windows have been opened:
echo 1. Backend Server (Port 5000)
echo 2. Frontend Server (Port 3000)
echo.
echo You can close this window. The servers will continue running.
echo.
pause

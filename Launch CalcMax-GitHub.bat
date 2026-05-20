@echo off
cd /d "%~dp0"
if not exist node_modules (
  echo Installing dependencies...
  npm install
  if errorlevel 1 pause & exit /b 1
)
start "CalcMax Server" cmd /k "npm run server"
timeout /t 2 /nobreak > nul
npm start

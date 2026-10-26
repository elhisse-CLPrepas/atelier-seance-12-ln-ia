@echo off
cd /d "%~dp0"
where npm.cmd >nul 2>nul || (echo Node.js / npm introuvable. & pause & exit /b 1)
if not exist "node_modules" call npm.cmd install
call npm.cmd run dev
pause

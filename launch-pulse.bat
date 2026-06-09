@echo off
setlocal enabledelayedexpansion

REM Get the directory where this batch file is located
set "SCRIPT_DIR=%~dp0"
set "PULSE_PATH=!SCRIPT_DIR!Pulse.html"

REM Convert to file:// URL format (handle spaces)
for /f "delims=" %%A in ("!PULSE_PATH!") do (
    set "PULSE_URL=file:///%%A"
    set "PULSE_URL=!PULSE_URL:\=/!
)

REM Launch Chrome in app mode with the app
start "" "C:\Program Files\Google\Chrome\Application\chrome.exe" --app="!PULSE_URL!" --new-window

exit /b 0

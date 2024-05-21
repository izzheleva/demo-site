@echo off
REM bouw de Docker-image en start de container op poort 81
docker build -t demo-site .
docker run -d --name demo-container -p 81:80 demo-site
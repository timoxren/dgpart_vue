#!/bin/bash

# Скрипт для обновления Docker-контейнера на сервере.
# Запускается из GitLab CI по SSH.

# --- Переменные ---
DOCKER_REPO="timoxren/timoxren-app"
CONTAINER_NAME="timoxren-prod"
# Путь к папке со статикой на хост-машине (сервере)
STATIC_DIR_HOST="/home/timoxren/srv/static"
# Путь, куда будет смонтирована статика внутри контейнера
WEB_ROOT_CONTAINER="/usr/share/nginx/html"

echo "Logging in to Docker Hub..."
# DOCKER_HUB_USER и DOCKER_HUB_PASS должны быть переданы в команду SSH
echo "$DOCKER_HUB_PASS" | docker login -u "$DOCKER_HUB_USER" --password-stdin

echo "Pulling the latest image for $DOCKER_REPO:latest..."
docker pull $DOCKER_REPO:latest

echo "Stopping and removing the old container..."
# Используем '|| true', чтобы команда не завершалась с ошибкой, если контейнера нет
docker stop $CONTAINER_NAME || true
docker rm $CONTAINER_NAME || true

echo "Starting the new container with mounted static volume..."
# --- ИЗМЕНЕНИЕ: Монтируем статику в подпапку /static ---
docker run -d \
  -p 9700:80 \
  -v "${STATIC_DIR_HOST}:${WEB_ROOT_CONTAINER}/public" \
  --name $CONTAINER_NAME \
  $DOCKER_REPO:latest

echo "Cleaning up old images..."
docker image prune -f

echo "Deployment finished successfully!"

DOCKER_REPO ?= timoxren/timoxren-app
VERSION_FILE = VERSION

# --- Server Configuration ---
SERVER_USER ?= timoxren
SERVER_IP ?= dgpart.ru
STATIC_DIR_REMOTE ?= /home/timoxren/srv/static/
DEPLOY_SCRIPT_PATH_REMOTE ?= /home/timoxren/srv/deploy.sh

# --- Development Commands ---
up:
	docker compose up -d app app_static

down:
	docker compose down

restart: down up

install:
	docker compose run app yarn install

# --- Production Commands ---
build:
	$(eval VERSION := $(shell cat $(VERSION_FILE)))
	docker build -t $(DOCKER_REPO):$(VERSION) -t $(DOCKER_REPO):latest .
	@echo "Built image $(DOCKER_REPO) with tags: $(VERSION) and latest"

# Runs the production container locally for testing
up-prod:
	docker run -d \
	  -p 9800:80 \
	  -v $(CURDIR)/public:/usr/share/nginx/html/static \
	  --name timoxren-prod \
	  $(DOCKER_REPO):latest

down-prod:
	docker stop timoxren-prod && docker rm timoxren-prod

# --- Docker Hub ---
push-docker:
	$(eval VERSION := $(shell cat $(VERSION_FILE)))
	docker push $(DOCKER_REPO):$(VERSION)
	docker push $(DOCKER_REPO):latest
	@echo "Pushed version $(VERSION) and latest to $(DOCKER_REPO)"

# --- Server Sync ---
sync-static:
	@echo "--- Syncing static files ---"
	rsync -avz --delete ./public/ ${SERVER_USER}@${SERVER_IP}:${STATIC_DIR_REMOTE}
	@echo "--- Syncing deploy script ---"
	rsync -avz ./deploy.sh ${SERVER_USER}@${SERVER_IP}:${DEPLOY_SCRIPT_PATH_REMOTE}
	@echo "Sync complete."


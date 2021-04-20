.PHONY: up down restart

up:
	docker-compose up -d app app_static

down:
	docker-compose down

restart: down up


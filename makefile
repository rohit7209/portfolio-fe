.PHONY: help install dev start stop analyse

help: ## Display available commands
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

install: ## Setup all project dependencies
	npm i

hot: ## Start webpack-dev-server
	npm run dev-server

## Start server in dev mode for SSR
dev: start-dev logs

start-dev: build ## Start server in dev mode for SSR
	./node_modules/.bin/pm2 start config/pm2/development.json

start: build ## Start server for SSR in production
	./node_modules/.bin/pm2 start config/pm2/production.json

stop: ## Start SSR server
	./node_modules/.bin/pm2 delete config/pm2/development.json

logs: ## Display SSR server logs
	./node_modules/.bin/pm2 logs

analyse: ## build webpack for client bundles analyse
	NODE_ENV=analyse ./node_modules/.bin/webpack --config webpack.client.config.js -p

build:
	npm run build-client
	npm run build-server

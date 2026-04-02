# Stage 1: Build the static site
FROM node:23-alpine AS builder

WORKDIR /app

COPY . .
RUN yarn install --frozen-lockfile
RUN yarn generate

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.prod.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

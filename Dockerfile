FROM node:23-alpine AS builder
WORKDIR /app
COPY . .
RUN yarn install --frozen-lockfile
RUN yarn build

FROM node:23-alpine AS prod
WORKDIR /app
COPY --from=builder /app/.output /app
CMD node server/index.mjs
EXPOSE 3000

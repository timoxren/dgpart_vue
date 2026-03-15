# Stage 1: Build the static site
FROM node:23-alpine AS builder

WORKDIR /app

COPY . .
RUN yarn install --frozen-lockfile

# Generate the static site into the /app/dist directory
RUN yarn generate

# Stage 2: Create the final Nginx image
FROM nginx:alpine

WORKDIR /usr/share/nginx/html

# Copy the generated static files from the builder stage to Nginx's web root
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy the custom Nginx configuration
COPY nginx.prod.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

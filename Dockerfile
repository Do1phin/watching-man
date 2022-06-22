FROM node:18.4.0-alpine AS node_base

FROM node_base AS deps
WORKDIR /app
COPY package.json ./
RUN ["npm", "install"]

FROM node_base AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . ./
CMD ["npm", "run", "build"]

FROM nginx:1.22.0-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
WORKDIR /usr/share/nginx/html

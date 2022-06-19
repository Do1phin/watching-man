FROM node:18.4.0-alpine as node-stage
WORKDIR /usr/src/tmp
COPY package*.json ./
RUN ["npm", "install"]
CMD ["npm", "run", "build"]
CMD ["npm", "run", "build"]
WORKDIR /usr/src/tmp/dist/
COPY . /usr/src/app

FROM nginx:1.22.0-alpine as nginx-stage
COPY --from=node-stage /usr/src/app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

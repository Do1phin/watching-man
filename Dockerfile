FROM node:17.5-alpine3.15 as node-stage
WORKDIR /tmp
COPY package*.json /tmp/
RUN ["npm", "install"]
CMD ["npm", "run", "start"]
WORKDIR /dist/
COPY /dist/ /usr/src/app

FROM nginx:1.21.0-alpine as nginx-stage
COPY --from=node-stage /usr/src/app/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

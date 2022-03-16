FROM node:17.7.1-alpine as node-stage
WORKDIR /tmp
COPY package*.json /tmp/
RUN ["npm", "install"]
CMD ["npm", "run", "build"]
WORKDIR /dist
COPY /dist/ /usr/src/app

FROM nginx:1.21.6-alpine as nginx-stage
COPY --from=node-stage /usr/src/app/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

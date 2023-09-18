FROM node:latest AS builder

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install

COPY .. .

RUN npm run build:prod

FROM nginx:latest

COPY --from=builder /usr/src/app/build /usr/share/nginx/html

COPY /front/config/nginx /etc/nginx

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]

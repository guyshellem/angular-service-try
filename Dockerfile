# FROM node:12.8.0 as builder
# WORKDIR /usr/src/app

# COPY package.json .
# COPY package-lock.json .

# RUN npm install -v
# COPY . .
# RUN npm run build


# FROM nginx:1.17.1-alpine
# COPY --from=build /usr/src/app/dist/demo /usr/share/nginx/html

# TODO: update docker and reintroduce this


FROM nginx:1.15.8-alpine

RUN rm -rf /usr/share/nginx/html/*
COPY /dist/demo/* /usr/share/nginx/html/
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
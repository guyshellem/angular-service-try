FROM node:12.8.0 as builder
WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .

RUN node -v
RUN npm -v
RUN npm ci --production


FROM node:12.8.0-alpine
WORKDIR /usr/src/app

RUN apk update && \
	apk add shadow

ENV UID=iai GID=docker
RUN groupadd -r $GID -g 20000 && \
    useradd -u 20000 -r -g $GID $UID

EXPOSE 6379

COPY --chown=iai:docker package.json .
COPY --chown=iai:docker package-lock.json .
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --chown=iai:docker dist/ dist/
COPY --chown=iai:docker server/ server/
COPY --chown=iai:docker index.js .
COPY --chown=iai:docker config.js .

USER $UID

CMD ["npm", "run", "server:prod"]

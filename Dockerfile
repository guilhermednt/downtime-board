FROM node:9-alpine

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh
RUN npm install http-server -g

WORKDIR /app
COPY . /app

CMD ["http-server", "-p 80"]

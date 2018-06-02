FROM node:latest

RUN mkdir -p /usr/src
WORKDIR /usr/src
COPY ./package.json /usr/src/package.json

RUN npm install

COPY . /usr/src

EXPOSE 1337

CMD ["npm", "start"]
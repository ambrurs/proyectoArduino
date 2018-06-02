FROM node:latest

RUN mkdir -p /usr/src
WORKDIR /usr/src
COPY ./package.json /usr/src/package.json

RUN npm install

COPY . /usr/src

EXPOSE 4001

CMD ["npm", "start"]
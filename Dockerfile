FROM node:12

EXPOSE 1260

ADD package.json /usr/src/app/
WORKDIR /usr/src/app
RUN npm install

ADD . /usr/src/app

CMD npm start

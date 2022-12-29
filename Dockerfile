FROM node:16.13.2-alpine

RUN npm i -g npm@8.5.5

WORKDIR /usr/src/app

COPY package*.json ./

COPY yarn.lock ./

RUN yarn

COPY . /usr/src/app

EXPOSE 3000

RUN yarn run build

CMD [ "yarn" , "start"]
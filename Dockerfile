FROM node:18-alpine

WORKDIR /app

COPY public/ /app/public
COPY src/ /app/src
COPY package.json /app/
COPY yarn.lock /app/


RUN yarn

CMD ["yarn", "start"]

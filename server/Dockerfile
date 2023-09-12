FROM node:18-alpine

WORKDIR /app

COPY src/ /app/src
COPY yarn.lock /app/
COPY package.json /app/

RUN yarn

EXPOSE 4000

CMD ["yarn", "start"]

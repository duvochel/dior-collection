FROM node:18-alpine

WORKDIR /app

COPY src/ /app/src
COPY yarn.lock /app/
COPY package.json /app/

ENV NODE_ENV=production
RUN yarn

EXPOSE 4000

CMD ["yarn", "start"]

FROM node:current-bookworm

WORKDIR /app

COPY dist ./dist

COPY package.json yarn.lock ./
RUN yarn --production --frozen-lockfile

CMD [ "yarn", "start" ]
EXPOSE 4000

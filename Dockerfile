FROM node:18-alpine as build

WORKDIR /app

COPY public/ ./public
COPY src/ ./src
COPY package.json yarn.lock tsconfig.json globals.d.ts ./

RUN yarn --frozen-lockfile
RUN yarn build

FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

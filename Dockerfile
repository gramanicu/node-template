FROM node:18-alpine AS build

WORKDIR /usr/src/app
COPY ./package*.json ./

RUN npm install

COPY ./ ./

RUN npm ci

FROM node:18-alpine AS production

WORKDIR /usr/src/app

COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/dist ./dist
COPY --from=build /usr/src/app/package.json .

EXPOSE 3000

CMD [ "npm", "run", "start:migrate" ]
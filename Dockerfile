FROM node:18-alpine AS build

WORKDIR /usr/src/app
COPY ./package*.json ./

RUN npm install

COPY ./ ./

RUN npm ci

FROM node:18-alpine AS production

WORKDIR /usr/src/app

COPY ./package*.json ./
RUN npm ci --omit=dev --ignore-scripts
COPY --from=build /usr/src/app/dist ./dist

EXPOSE 3000

CMD [ "npm", "run", "start:migrate" ]
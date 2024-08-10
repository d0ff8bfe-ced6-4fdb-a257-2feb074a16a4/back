# Dockerfile
FROM node:21-alpine3.19

WORKDIR /app

COPY yarn.lock package.json ./

RUN yarn install

COPY . .

EXPOSE 3000

RUN yarn prisma generate && yarn build

CMD ["sh", "-c", "yarn prisma migrate deploy && yarn start:prod"]

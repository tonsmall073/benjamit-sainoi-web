FROM node:22.10-alpine

WORKDIR /app

COPY . .

RUN yarn install --frozen-lockfile

RUN yarn build

EXPOSE 3000

CMD ["yarn","start"]
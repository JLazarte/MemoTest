FROM node:16

EXPOSE 3000

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

COPY .env-docker .env

RUN npm run build

CMD ["npm", "start"]
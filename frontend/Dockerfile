FROM node:14.17.2

WORKDIR /app

COPY package.json .

COPY tailwind.config.js .

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]
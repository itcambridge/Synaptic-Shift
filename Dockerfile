FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm install three@latest

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"] 
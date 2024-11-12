FROM node:21-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . /app

# RUN npm run build
# RUN npm run dev

EXPOSE 80

CMD ["npm", "run", "dev"];

FROM node:14

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

ENV REACT_APP_API=/products

RUN npm i -g serve

RUN npm run build

EXPOSE 5000

CMD ["serve", "-s", "build"]
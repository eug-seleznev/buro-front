FROM node:12
WORKDIR /app

# ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
RUN yarn install --silent

COPY . .

CMD ["yarn", "start"]


FROM node

WORKDIR /usr/apptasks

COPY  package.json ./

RUN yarn install

COPY . .

EXPOSE 3000

CMD [ "yarn", "dev" ]
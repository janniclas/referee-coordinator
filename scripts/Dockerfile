# base image
FROM node:alpine as build

# set working directory
WORKDIR /referee-coordinator

# add `/referee-coordinator/node_modules/.bin` to $PATH
ENV PATH /referee-coordinator/node_modules/.bin:$PATH
ENV CI true
# install and cache referee-coordinator dependencies
COPY package.json /referee-coordinator/package.json
RUN npm install
RUN npm install react-scripts@3.0.1 -g
COPY . .

RUN npm test

RUN npm run build


# production environment
FROM nginx
COPY --from=build /referee-coordinator/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
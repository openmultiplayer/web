FROM node:11 AS build

WORKDIR /app
ADD . .
RUN npm install && \
    npm run build

FROM nginx AS run

COPY --from=build /app/build /usr/share/nginx/html
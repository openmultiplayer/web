FROM node:11 AS build

WORKDIR /app
ADD . .
RUN npm install -g vuepress && \
    npm run build

FROM nginx AS run

COPY --from=build /app/.vuepress/dist /usr/share/nginx/html

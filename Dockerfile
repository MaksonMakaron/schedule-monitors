# этап сборки (build stage)
FROM node as build-stage
RUN git clone https://github.com/MaksonMakaron/schedule-monitors app
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build


# этап production (production-stage)
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
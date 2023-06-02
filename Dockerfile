FROM node:20.1.0-alpine
WORKDIR /app

COPY . .
RUN npm ci
RUN npm run build
ENV NODE_ENV production
EXPOSE 3000
CMD [ "npx", "serve", "build" ]
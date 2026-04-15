FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --only=production

COPY . .

RUN adduser -D appuser
USER appuser

EXPOSE 3000

CMD ["node", "app.js"]
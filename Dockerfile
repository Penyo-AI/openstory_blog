FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install

COPY . .

EXPOSE 3001

CMD ["npx", "vitepress", "dev", "--host", "0.0.0.0", "--port", "3001"]

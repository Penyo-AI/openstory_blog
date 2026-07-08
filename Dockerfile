FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install

COPY . .

RUN npx vitepress build

EXPOSE 3001

CMD ["npx", "vitepress", "preview", "--host", "0.0.0.0", "--port", "3001"]

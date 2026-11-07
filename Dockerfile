FROM node:22-alpine

WORKDIR /app

RUN apk add --no-cache openssl

COPY package.json package-lock.json ./
RUN npm ci

COPY prisma ./prisma
RUN DATABASE_URL="mysql://rental_user:local_build_only@localhost:3306/rental_db" npx prisma generate

COPY nest-cli.json tsconfig*.json ./
COPY src ./src
RUN npm run build

EXPOSE 3000

CMD ["sh", "-c", "npx prisma migrate deploy && npm run start:prod"]

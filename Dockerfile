FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN  npm install
COPY . .
RUN npm run build

# Stage 2 - production
#--platform=linux/amd64
FROM node:18 AS final
WORKDIR /app
ADD package.json .
ADD nuxt.config.js .

COPY --from=builder /app .
COPY --from=builder /app/.nuxt ./.nuxt
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/static ./static
COPY --from=builder /app/locales ./locales
RUN npm run generate

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

EXPOSE 3000
CMD ["npm", "start"]
ARG FRONTEND_BRANCH=frontend

# Клонируем ветку фронтенда
FROM alpine/git AS clone-frontend
WORKDIR /tmp
RUN git clone --branch frontend --single-branch https://github.com/Netron-Frontend/cybertech.git frontend

# Билд этап
FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=clone-frontend /tmp/frontend/ ./
RUN yarn
RUN yarn build

# Финальный образ
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/package.json ./
COPY --from=builder /app/yarn.lock ./
RUN yarn install --production
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["yarn", "start"]
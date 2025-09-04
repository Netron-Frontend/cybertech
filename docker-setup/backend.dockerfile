ARG BACKEND_BRANCH=backend

# Клонируем ветку бэкенда
FROM alpine/git AS clone-backend
WORKDIR /tmp
RUN git clone --branch ${BACKEND_BRANCH} --single-branch https://github.com/Netron-Frontend/cybertech.git backend

# Билд этап
FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=clone-backend /tmp/backend/ ./
RUN yarn install
RUN yarn build

# Финальный образ
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/package.json ./
COPY --from=builder /app/yarn.lock ./
RUN yarn install --production
COPY --from=builder /app/dist ./dist
EXPOSE 3001
CMD ["yarn", "start:prod"]
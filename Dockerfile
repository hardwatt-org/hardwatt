FROM node:24-alpine AS builder

RUN corepack enable

WORKDIR /app
COPY ./package.json ./pnpm-lock.yaml /app/
RUN pnpm install

COPY . /app/
RUN pnpm build


FROM ghcr.io/hardwatt-org/hardwatt-pocketbase:v0.1.0
COPY --from=builder /app/build /pb_public

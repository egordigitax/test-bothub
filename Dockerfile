FROM node:22-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base as build

# Exact same steps as before
WORKDIR /app

COPY pnpm-lock.yaml /app
COPY package.json /app

RUN pnpm install --frozen-lockfile
RUN apt-get update -y && apt-get install -y openssl

COPY . /app

RUN pnpm run prisma:generate
RUN pnpm run build

ENV HOST 0.0.0.0
ENV PORT 3000
EXPOSE 3000

# Start is the same as before
CMD ["node", "/app/dist/src/index.js"]


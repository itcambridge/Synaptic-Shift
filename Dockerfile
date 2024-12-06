FROM node:18-alpine AS builder

WORKDIR /app

# Install dependencies including dev dependencies
COPY package*.json ./
RUN npm install

# Install additional required packages
RUN npm install three@latest
RUN npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-next

# Copy source
COPY . .

# Clear any existing build files
RUN rm -rf .next

# Production build
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV=production
RUN npm run build

# Production image, copy all the files and run next
FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED 1

# Copy built assets from builder
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"] 
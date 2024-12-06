FROM node:18-alpine AS builder

WORKDIR /app

# Install dependencies including dev dependencies
COPY package*.json ./
RUN npm install --verbose

# Install additional required packages
RUN npm install --save three@latest
RUN npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint eslint-config-next

# Copy source
COPY . .

# Clear any existing build files and show directory contents
RUN rm -rf .next
RUN ls -la

# Production build with detailed output
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV=production
ENV CI=false
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
FROM node:18-alpine

WORKDIR /app

# Install build essentials
RUN apk add --no-cache python3 make g++

# Install dependencies
COPY package*.json ./
RUN npm install --legacy-peer-deps
RUN npm install three@latest --legacy-peer-deps
RUN npm install --save-dev @types/three

# Copy source
COPY . .

# Clear any existing build files
RUN rm -rf .next

# Production build with debug output
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV=production
ENV CI=false
ENV DEBUG=* 
RUN npm run build --verbose

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["npm", "start"] 
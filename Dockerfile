FROM node:18-alpine

WORKDIR /app

# Install build essentials
RUN apk add --no-cache python3 make g++ git

# Install dependencies
COPY package*.json ./
RUN npm install --legacy-peer-deps
RUN npm install three@latest @react-three/fiber @react-three/drei --legacy-peer-deps
RUN npm install --save-dev @types/three

# Copy source
COPY . .

# Clear any existing build files
RUN rm -rf .next
RUN npm cache clean --force

# Production build with debug output
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV=production
ENV CI=false
ENV DEBUG=* 

# Show installed packages
RUN npm list --depth=0

RUN npm run build --verbose

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["npm", "start"] 
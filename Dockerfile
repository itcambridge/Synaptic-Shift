FROM node:18

WORKDIR /app

# Install dependencies
COPY package*.json ./

# Install dependencies with verbose logging
RUN npm install --legacy-peer-deps --no-optional --verbose
RUN npm install three@latest @react-three/fiber @react-three/drei --legacy-peer-deps --no-optional --verbose
RUN npm install sharp --verbose
RUN npm install --save-dev @types/three --verbose

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
ENV NODE_OPTIONS="--max_old_space_size=4096"

# Show installed packages and environment
RUN npm list --depth=0
RUN node -v && npm -v

# Build with increased memory and verbose output
RUN NODE_OPTIONS=--max_old_space_size=4096 npm run build --verbose

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["npm", "start"] 
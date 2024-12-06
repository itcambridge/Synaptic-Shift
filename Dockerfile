FROM node:18

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install --legacy-peer-deps --no-optional
RUN npm install three@latest @react-three/fiber @react-three/drei --legacy-peer-deps --no-optional
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
ENV NODE_OPTIONS="--max_old_space_size=4096"

# Show installed packages
RUN npm list --depth=0

# Build with increased memory
RUN NODE_OPTIONS=--max_old_space_size=4096 npm run build

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["npm", "start"] 
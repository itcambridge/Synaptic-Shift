FROM node:18

WORKDIR /app

# Install dependencies
COPY package*.json ./

# Install all dependencies in one step to reduce layers
RUN npm install --legacy-peer-deps --no-optional \
    && npm install sharp \
    && npm install three@latest @react-three/fiber @react-three/drei --legacy-peer-deps \
    && npm install --save-dev @types/three

# Copy source
COPY . .

# Clear any existing build files and cache
RUN rm -rf .next
RUN npm cache clean --force

# Set environment variables
ENV NEXT_TELEMETRY_DISABLED=1 \
    NODE_ENV=production \
    CI=false \
    NODE_OPTIONS="--max_old_space_size=8192"

# Debug information
RUN node -v && npm -v && npm list --depth=0

# Build with debugging
RUN npm run build || (cat /app/.next/error.log && exit 1)

EXPOSE 3000

ENV PORT=3000 \
    HOSTNAME="0.0.0.0"

CMD ["npm", "start"] 
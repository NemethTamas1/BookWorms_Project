# syntax = docker/dockerfile:1

# Adjust NODE_VERSION as desired
ARG NODE_VERSION=18.18.0
FROM node:${NODE_VERSION}-slim as base

LABEL fly_launch_runtime="NestJS"

# NestJS app lives here
WORKDIR /app/backend

# Use an ARG to set the environment, but no default value is needed
ARG NODE_ENV
ENV NODE_ENV=${NODE_ENV}

# Copy the appropriate .env file based on NODE_ENV value
COPY env.${NODE_ENV} env.${NODE_ENV}
COPY .env .env

# Throw-away build stage to reduce size of final image
FROM base as build

# Install packages needed to build node modules
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential node-gyp pkg-config python-is-python3

# Install node modules
COPY --link package-lock.json package.json ./
RUN npm ci --include=dev

# Copy application code
COPY --link . .

# Build application
RUN npm run build


# Final stage for app image
FROM base

# Copy built application
COPY --from=build /app /app
COPY dist/client /app/dist/client

# Start the server by default, this can be overwritten at runtime
EXPOSE 3000
RUN echo "NODE_ENV=$NODE_ENV"
RUN cat .env.development
CMD ["/bin/sh", "-c", "if [ \"$NODE_ENV\" = 'production' ]; then npm run start; else npm run start:dev; fi"]

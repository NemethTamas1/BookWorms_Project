# frontend/Dockerfile
FROM node:16

# Install git
RUN apt-get update

# Set the working directory to the frontend folder inside the cloned repo
WORKDIR /app/frontend

# Copy the frontend files to the working directory
COPY . .

# Install Node.js dependencies
RUN npm install

# Run the frontend server
CMD ["npm", "run", "dev", "--", "--host"]

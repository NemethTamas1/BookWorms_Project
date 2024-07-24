# frontend/Dockerfile
FROM node:16

# Install git
RUN apt-get update && apt-get install -y git

# Set the working directory
WORKDIR /app

# Clone the latest code from GitHub
RUN git clone https://github.com/szankdav/bookWorms.git .

# Set the working directory to the frontend folder inside the cloned repo
WORKDIR /app/frontend

# Install Node.js dependencies
RUN npm install

# Run the frontend server
CMD ["npm", "run", "dev", "--", "--host"]

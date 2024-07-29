# frontend/Dockerfile
FROM node:16

# Install git
RUN apt-get update && apt-get install -y git

# Set the working directory
WORKDIR /app

# Clone the latest code from GitHub
ARG REPO_URL="https://github.com/NemethTamas1/BookWorms_Project.git"
RUN git clone ${REPO_URL} .

# Set the working directory to the frontend folder inside the cloned repo
WORKDIR /app/frontend

# Install Node.js dependencies
RUN npm install

# Run the frontend server
CMD ["npm", "run", "dev", "--", "--host"]

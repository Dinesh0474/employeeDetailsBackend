# Use an official Node.js runtime as a base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the entire application to the container
COPY . .

EXPOSE 5000


# Specify the command to run on container startup
CMD ["npm","run", "start"]

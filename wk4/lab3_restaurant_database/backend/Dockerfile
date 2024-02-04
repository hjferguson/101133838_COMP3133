# Use an official Node runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Bundle your app's source code inside the Docker image
COPY . .

# Copy the start script and make sure it's executable
COPY start.sh .
RUN chmod +x start.sh

# Map port
EXPOSE 3000

# Define the command to run your app
CMD [ "./start.sh" ]

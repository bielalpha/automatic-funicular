FROM node:16-alpine

# Create app directory
WORKDIR /usr/src/app

# Update and install dependencies
RUN apk update && apk upgrade && \
    apk add --no-cache bash git

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Command to run the application
CMD ["npm", "start"]
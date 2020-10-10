# Use the official image as a parent image.
FROM node:10.15.3
# Set the working directory.
WORKDIR /usr/src/app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json .
# Run the command inside your image filesystem.
RUN npm install --production
# Add metadata to the image to describe which port the container is listening on at runtime.
EXPOSE 3000
# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .
# RUN npm run react-dev
# RUN npm run seed
# Run the specified command within the container.
CMD ["npm", "start"]
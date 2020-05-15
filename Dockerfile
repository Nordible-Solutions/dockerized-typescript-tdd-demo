# The base image is alpine latest OS
FROM alpine:latest

# Install nodejs and npm without caching to reduce the size of the resultant tarball
RUN apk add --no-cache nodejs npm

# Create the working directory for the app
WORKDIR /app

# Copy the source code to the working directory
COPY . /app

# Install npm dependencies
RUN npm install

ENTRYPOINT [ "/bin/setup.sh", "/bin/parking_lot.sh"]

# CMD [ "/bin/setup.sh", "/bin/parking_lot.sh"]

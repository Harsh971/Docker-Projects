# Use the official Nginx image as a base image
FROM nginx:alpine

# Copy the local index.html file to Nginx's html directory
COPY index1.html /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Add a label to specify the version
LABEL version="1.0"
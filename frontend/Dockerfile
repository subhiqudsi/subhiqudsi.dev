# Use a lightweight Node image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install a lightweight static server
RUN npm install -g serve

# Copy generated static files into the container
COPY ./.output/public /app

# Expose the port 'serve' uses
EXPOSE 3000

# Serve the static content
CMD ["serve", "-s", ".", "-l", "3000"]
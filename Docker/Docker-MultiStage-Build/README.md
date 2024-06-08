Creating a Docker project using multi-stage builds can significantly reduce the final image size. Multi-stage builds allow you to use multiple `FROM` statements in your Dockerfile, each specifying a different base image. You can then copy artifacts from one stage to another, ensuring only the necessary files are included in the final image.

We'll create a basic Node.js application, write a Dockerfile with multi-stage builds, and compare the image sizes.

### Step 1: Set Up Your Node.js Project

1. **Initialize a Node.js Project:**

   ```sh
   mkdir my-node-app
   cd my-node-app
   npm init -y
   ```

2. **Create a Simple Node.js Application:**

   Create an `index.js` file:

   ```js
   // index.js
   const express = require('express');
   const app = express();
   const port = 3000;

   app.get('/', (req, res) => {
     res.send('Hello World!');
   });

   app.listen(port, () => {
     console.log(`Example app listening at http://localhost:${port}`);
   });
   ```

3. **Install Dependencies:**

   ```sh
   npm install express
   ```

### Step 2: Create a Multi-Stage Dockerfile

1. **Create a Dockerfile:**

   ```Dockerfile
   # Stage 1: Build the application
   FROM node:14 AS builder

   # Set the working directory
   WORKDIR /app

   # Copy package.json and package-lock.json
   COPY package*.json ./

   # Install dependencies
   RUN npm install

   # Copy the rest of the application
   COPY . .

   # Build the application (if you have any build steps, like TypeScript compilation)
   # RUN npm run build

   # Stage 2: Create the production image
   FROM node:14-alpine

   # Set the working directory
   WORKDIR /app

   # Copy only the necessary files from the builder stage
   COPY --from=builder /app .

   # Expose the port the app runs on
   EXPOSE 3000

   # Start the application
   CMD ["node", "index.js"]
   ```

### Step 3: Build and Run the Docker Image

1. **Build the Docker Image:**

   ```sh
   docker build -t my-node-app .
   ```

2. **Run the Docker Container:**

   ```sh
   docker run -p 3000:3000 my-node-app
   ```

### Step 4: Compare Image Sizes

To compare the image sizes, let's inspect the sizes before and after using multi-stage builds.

1. **Build a Non-Multi-Stage Docker Image:**

   Create a simple Dockerfile without multi-stage:

   ```Dockerfile
   FROM node:14

   WORKDIR /app

   COPY package*.json ./
   RUN npm install

   COPY . .

   EXPOSE 3000
   CMD ["node", "index.js"]
   ```

   Build this image:

   ```sh
   docker build -t my-node-app-simple -f Dockerfile.simple .
   ```

2. **Compare the Image Sizes:**

   ```sh
   docker images
   ```

   You should see two images listed: `my-node-app` (multi-stage) and `my-node-app-simple` (non-multi-stage). The size of the multi-stage image should be significantly smaller.

### Explanation

- **Multi-Stage Build:**
  - The first stage (`builder`) uses the full Node.js image to install dependencies and build the application.
  - The second stage (`node:14-alpine`) is a lightweight image. It copies only the necessary files from the builder stage, thus reducing the final image size.
  
- **Non-Multi-Stage Build:**
  - The entire build environment, including all the development dependencies and build tools, are included in the final image, making it larger.


Using multi-stage builds in Docker helps streamline your final images by excluding unnecessary build dependencies and files, leading to more efficient and smaller production images. This is particularly useful for Node.js projects where dependencies can be large, but only a subset is needed to run the application.

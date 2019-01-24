# Build-container: docker build -t <given-name-to-container> .
# Run-container: docker run -p 80:8080 <given-name-to-container>

FROM node:alpine
WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY ./ ./ 
RUN npm run build
EXPOSE 8080
CMD ["npm", "start"]
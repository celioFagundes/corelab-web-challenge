FROM node
WORKDIR /app
ENV NDODE_ENV=development
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
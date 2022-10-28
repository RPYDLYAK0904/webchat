FROM cypress/included:10.11.0
RUN mkdir /cypress-docker
WORKDIR /cypress-docker
COPY ./package.json .
COPY ./cypress.config.js .
COPY ./cypress ./cypress
RUN npm install
ENTRYPOINT ["npm", "run"]

# docker build -t cypress-w3org .
# docker-compose run e2e-chrome
# docker-compose run e2e-firefox
# docker-compose up
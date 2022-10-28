# webchat

1. To run test from Docker:
    - Download and install Docker on your machine
    - To build image run:
    - "docker build -t cypress-webchat ."
    - To run tests run:
    - "docker-compose run smoke"

2. To run tests loccaly:
    - To install dependencies run:
    - "npm install"
    - To run smoke test:
    - "npm run test:smoke"
    - To run on regression test:
    - "npm run test:regression"

Reports will be generated into reports-chrome and reports-firefox folders respectively 

3. To run in Cypress test runner:
    - npm run cy:open


Test cases prioritization:
All tests are tagged "smoke" or/and "regression" 
Only 1 test case "should enable Send button" identified for smoke test, it covers the most critical functionalities:
- open widget
- select location
- enables to send sms

Bugs found:
- greeting message incorrect date and time
- intro message incorrect date and time
- not able to navigate back when click on back arrow
Default locations and search did not consider as bug. *Note: There are only 4 locations available, no other locations will be populated based
on the search input.

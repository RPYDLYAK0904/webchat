# webchat

1. To run test from Docker:
    - Download and install Docker on your machine, lunch Docker
    - To build image run:
    - "docker build -t cypress-webchat ." (space and dot is part of command)
    - To run smoke test:
    - "docker-compose run smoke"
    - To run regression test:
    - "docker-compose run regression"

2. To run tests loccaly from the command line in HEADED mode (just for visualization):
    - To install dependencies run:
    - "npm install"
    - To run smoke test:
    - "npm run test:smoke"
    - To run on regression test:
    - "npm run test:regression"

Reports will be generated into reports-chrome and reports-firefox folders respectively 

3. To run in Cypress test runner:
    - npm run cy:open


Test cases:
1. should open webchat widget ("regression")
2. should close webchat widget ("regression")
3. should go to previous page when click on back arrow ("regression")
4. should display default locations count
5. should open location from suggestion list ("regression")
6. should display current date and time along with intro message ("regression")
7. should enable Send button ("smoke", "regression")
8. should see negative char count when type more than 300 characters ("regression")
9. should display error messages when submit with empty fields ("regression")

Test cases prioritization:
All tests are tagged "smoke" or/and "regression". 
Test case "should enable Send button" identified for smoke test, it covers the most critical functionalities:
- open widget
- select location
- enables to send sms

Bugs found:
- greeting message incorrect date and time
- intro message incorrect date and time
- not able to navigate back when click on back arrow
- incorrect suggested locations number displayed

Location Search did not consider as bug. Note from assesment letter: There are only 4 locations available, no other locations will be populated based on the search input. 

Some test cases fail for purpose and considered as bugs.

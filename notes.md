
# Description of my website

# To Do 9/29
- [x] Write a To Do item
- [x] Create basic create-react-app framework as dry run test example
- [x] Create git repository for test example

# To Do 10/2
- [x] Create basic create-react-app framework for formal project

# To Do 10/3
- [x] Re-do of create-react-app framework because previous methods incorrect
    - [x] Copy db.json , README.md , and notes.md content to new project file
- [x] Create git repository for formal project
    - [x] First git commit to the github repo
- [x]  Added the following code to package.json
    - [x] "server": "json-server --watch db.json --port 3030" ,
    - This code runs  my port 3030 server so I can type "npm run server"
- [x] Fetch example trade data from db.json
- [x] Place the fetched db.json data into a table
- [x] Ask if Deploying this project on Netlify's server a requirement? - No

# To Do 10/4
-[x] Have trade study matrix POST data to db.json when new trades done
    -[x] Use a controlled form/component to make your POST request.
- [x] Create a TradesForm Component to do the above
- [x] Change both App and TradesForm to new db object format with 18 values
- [x] Ask if Deploying this project on Netlify's server a requirement??? - No

# To Do 10/5
- [x] Fix errors described below
    - [x] When npm start on host/3000 there is a Failed to Fetch "Uncaught runtime errors" that goes away after refresh of host/3000 page - error is due to me NOT starting the npm run server on host/3030 before I start npm start on host/3000 - failed to Fetch is good sign that you did not start your JSON server
    - [x] Unknown issue is not allowing input to only the "option2Trade2Grade" input field in TradesForm and db.json
        -[x] Error was "id" of that input field incorrectly set to "grade2"
    - [x] How to advance the "id" key field for each succeeding matrix update - the "id" is automatically added with its index value to the JSON file when making a POST request using Fetch
-[x] Created new DisplayTrade Component to remove display of trades from App
- [] Calculate the total aggregate grades to determine trade winner
- [x] Display the db.json objects into trade matrix table
- [x] Add React Router feature(s)
    - [x] Create a NavBar Component
    - [x] Example page & separate Home page for each option1-option2 trade
- [x] Always run for 1 first time (only)  " npm install react-router-dom@5 " to install React Router into your package.json dependencies but if it is already listed within your package.json dependencies, then you can just run " npm install "
    
# To Do 10/6

- [x] Get State Update to work on the POST request to achieve MVP status
    - [x] MVP Status is complete and David and CJ say I have working Phase-2 Project for turn-in to graduate
- [x] Removed Fetch requests from Child components and put into Parent/Home
- [x] Removed Fetch GET from ExampleTrade to eliminate unneeded server call

# To Do 10/7

- [x] Fix error in Example Trade caused by taking Fetch out of DisplayTrade
    - [x] Hard coded in Array of 1 Object of example data for ExampleTrade
- [x] Calculate the total aggregate grades to determine trade winner

# To Do 10/8

- [] Upload Phase 2 Project Video
- [x] Update Phase 2 Project Blog on Medium






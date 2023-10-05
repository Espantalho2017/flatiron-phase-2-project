
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
- [] Later have trade study matrix POST data to db.json when new trades done
    -[] Use a controlled form/component to make your POST request.
    -[] Upon return of json from your POST request, a state update by a setState function is required!
- [] Calculate the total aggregate grades to determine trade winner
-
- [] Is Deploying this project on Netlify's server a requirement???

# To Do 10/4
-[x] Have trade study matrix POST data to db.json when new trades done
    -[x] Use a controlled form/component to make your POST request.
- [x] Create a TradesForm Component to do the above
- [x] Change both App and TradesForm to new db object format with 18 values
- [x] Ask if Deploying this project on Netlify's server a requirement??? - No

# To Do 10/5
- [] Fix errors described below
    - [] When npm start on host/3000 there is a Failed to Fetch "Uncaught runtime errors" that goes away after refresh of host/3000 page
    - [x] Unknown issue is not allowing input to only the "option2Trade2Grade" input field in TradesForm and db.json
        -[x] Error was "id" of that input field incorrectly set to "grade2"
    - [] How to advance the "id" key field for each succeeding matrix update
-[x] Created new DisplayTrade Component to remove display of trades from App
- [] Calculate the total aggregate grades to determine trade winner
- [] Display the db.json objects into trade matrix table
- [] Have input form be left justified inside TradesForm with input labels
- [] Upon return of json from your POST request, a state update by a setState function is required!
- [] Add React Router feature(s)
    - [x] Create a NavBar Component
    - [] Example page & separate page for each option1-option2 trade??



    




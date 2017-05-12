# social-network-api
REST services written for a small social networking application

Question -

The world needs to know what everyone is doing. You can help the world achieve this by creating a few powerful APIs.

Give any user in the world the following superpowers:
      1. Ability to post an update of max length 140 characters
      2. Ability to follow anyone
      3. Ability to view the updates(time sorted in descending, latest update first) of all those the user follows. This would be the user's own personalized feed where the user gets to view updates from everyone he/she follows in a single stream.

 You need to make sure that this is a working API so that you can demo it to us.  Use any programming language & any database you are comfortable with.

 APIs you need to create:
    1. Create User API. ( Store name and email )
    2. Post update API. ( status is text only )
    3. Follow people API.  ( Where you are able to follow other users )
    4. Get followers post. ( Timeline )- 10 post
    5. You need to create username and password based authentication.  ( optional )


# Things that are in loop
*) Add liniting using eslint
*) Implement redis if require (ask first)
*) Change the design as per requirement
*) Complete the TODO
*) Refactore the code
*) Add validation to api
*) Add token system, csrf ( ask first )
*) Separate out dev modules and prod modules
*) Write npm scripts
*) Add schema validation
*) Create basic simple api - done
*) Create User model - done
*) Create routes for user api, create basic mvc for user api - done
*) Separate out tasks in index.js
*) Write test cases for API's one by one
*) We can use express router insted of app.get
*) Improve test cases
*) Use proper response codes
*) Can use populate

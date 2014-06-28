visionsOfTheJellyBeyond
=======================

Note: In its current state, this app is broken. You cannot currently login, but .. it might be better that way.

Quickstart:

You must have mongo installed.

    npm install mongodb
    

Then you can:

    git clone https://github.com/teedang19/visionsOfTheJellyBeyond.git


From root directory, set up mongoDB.

  
    mkdir data
    cd data
    mongod --dbpath <current_FULL_file_path; ex: /Users/Tam/Desktop/bakeries/data >
    
Now you have a mongod connection open.  Keep it open! From the app root direction, in a new terminal tab:

    npm install
    npm start

Navigate to `localhost:3000` and you should be running.

**I had 24 hours to write this program using Backbone.js on the front-end and Node.js on the back-end.**

Total experience using Backbone before this challenge: **5 hours**

Total experience using Node before this challenge: **2 hours**

*Wheeeeeeew.*
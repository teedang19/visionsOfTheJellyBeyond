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

=======================

**I had 24 hours to write this program using Backbone.js on the front-end and Node.js on the back-end.**

Total experience using Backbone before this challenge: **5 hours**  
Total experience using Node before this challenge: **2 hours**

*Wheeeeeeew.*

**Things I'm proud of:**  
+ effectively using mongoose models and schemas: `models/`
+ data: navigating, storing to, and retreiving from a mongoDB
+ fetching Backbone Models and passing them to Backbone Views
+ rendering those Backbone Views!
+ kind-of figuring out Jade templating
+ using Handlebars

*Every bullet point I just listed was something I had never done before.* Most of my previous experience is building Ruby/Rails applications. I still can't believe that my back-end and front-end talk friendly to each other. I'm a proud little learner.

**Huge Road Blocks:**
+ SESSIONS & cookie storage.  
what .. the .. *hell.* I've been spoiled by the Sinatra / Rails SessionsHelper. Someone, please build this in node.
+ General understanding of Backbone.js
anyone can read the docs and hack together some models, pass them to a view ... but what is *truly* going on?
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

To experience the **only** other functionality of this app, you have to manually edit the code (I know, bummer.) Navigate to `views/index.jade` and change the first line to `if true` to make the template block run. Backbone fetches a model -- it is located and returned from server -- and the Backbone View is compiled by Handlebars and rendered! Hoorah. (No, seriously -- *Hoorah!*)

=======================

**I had 24 hours to write this program using Backbone.js on the front-end and Node.js on the back-end.**

Total experience using Backbone before this challenge: **5 hours**  
Total experience using Node before this challenge: **2 hours**

*Wheeeeeeew.*

**Things I'm proud of:**  
+ effectively using mongoose models and schemas: `models/`
+ data: navigating, storing to, and retreiving from a mongoDB
+ using node & express routing as 'controllers'
+ fetching Backbone Models and passing them to Backbone Views
+ rendering those Backbone Views!
+ kind-of figuring out Jade templating
+ using Handlebars

*Everything* I just listed was a technology I've never used before. (My experience is in building Ruby/Rails applications using SQL databases. I've only used Javscript in the context of jQuery, AJAX, basic OOP & basic scripts.) I conquered these things in a respectable way.  I can't believe that my back-end and front-end talk friendly to each other. I'm a happy little learner.

**Huge Road Blocks:**
+ **sessions & cookie storage**  
what .. the .. *hell.* I've been spoiled by the Sinatra / Rails Sessions hash. I failed to figure out node/express sessions before the 24 hours was up. This is why you cannot login.
+ **General understanding of Backbone.js/Node.js**  
anyone can read the docs and hack together some models, pass them to a view ... but what is *truly* going on? This is something I always need to know, and it's not easy to figure out in a short time span. Example: I tried to hook in to the post route of my login form directly from the HTTP request, since it was not contained in a Backbone View element nor (originally) hooked to a Backbone Model. I *suspect* this is not allowed once you have a Backbone Router listening as well as a Backbone History started, because the request would occur but none of my params would come through. Wrapping it in Backbone View did the trick .. until I met the session-cookie monster. (I don't even know if this assumption is correct.)

**Things I hate most about this code:**
+ **modularization, organization**  
The immediate choice between hacking further on this project to implement more functionality, or learning more about the design of node/Backbone applications to better modularize & DRY up this app has a clear winner: **THE LATTER.** Ew, geeze, everything just exists in two huge files: `routes/index.js` and `public/javascripts/client.js`. THEY DON'T EVEN HAVE DESCRIPTIVE NAMES (that's because they do ten million things, each). I also had a probem with module loading and tried to look into a few module loaders ...
+ **test-less*  
I'm trying to strike a balance between learning a new language/framework and using TDD. Conundrum: if I don't know how something is supposed to work, how can I test it before I write it? Eek.

I'm really glad to have hacked on this challenge.  It was fun and I cannot believe how much I learned. I suspect I will continue with it, once it's been reviewed by my fate-masters.  Thank you for letting me participate :)
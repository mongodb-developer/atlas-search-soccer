Score Big with Atlas Search

In May 2022, Electronic Arts and FIFA consciously decoupled after 30 years of bringing gaming bliss to football enthusiasts across the globe.

gone are the ... 'expressions from the game, what you see, what you do... HEARING "GOOOOOOAAAAAALLLLL"
I am neither a gamer nor a football enthusiast, but I am a soccer mom. The EA FIFA gaming franchise gave me cheap, wholesome, and countless hours of babysitting. Park your child in front of any gaming console with EA FIFA, and there he/she would stay. Amused, entertained, but mostly still and not breaking anything.

EA FIFA, you let me fold the laundry. You let me finish dinner. You let me read a book. You let me speak on the phone. Uninterupted! <WISTFUL SIGH> and now you're gone - leaving me to despair for all the current soccer moms. Will they ever know a love like ours?

EA FIFA, AtlasSearchSoccer is my tribute to you. Part eulogy, part love song... oh, yeah. And part Atlas Search tutorial.
?? some corny expression about missing and loving someone - not knowing what they had until it's gone ??

<paragraph about the app taking the FIFA 22 player dataset>

when my now adult, still soccer-playing son comes home to commandeer the big screen and the kitchen for the European championships, I hope somebody somewhere learns about how to use Atlas Search's compound operator to quickly and easily build fine-grained searches. Maybe she'll find that mad skilled Polish goalie with the impossible to spell name. Maybe use the wildcard operator find the up-and-coming hotshot from Manchester United whose name begins with an R, I think?

list of the tech to learn...

and while these developers are using Atlas Search to quickly and easily build their FIFA dream team, I'll curl up with a (most likely technology) book and remember you, EA-FIFA.

<FOOTBALL===LIFE EXPRESSION HERE>
<DANNY ROJAS GIF>

get soccer photos of Tommy

<h1 align="center">Atlas Search Soccer</h1>

<h2 align="center">Build your FIFA Dream Team with MongoDB Atlas Search</h2>
<p>Hello! 👋 This application allows you to search lightning fast through over 22,000 soccer players based on a variety of search parameters and data types to build your own FIFA dream team:</p>
<ul>
<li>player name</li>
<li>player position</li>
<li>nationality</li>
<li>team</li>
<li>skill level</li>
<li>age</li>
<li>salary</li>
</ul>
<br/>
<div align="center">
<img src="restaurantDemo.gif" width="450"  />
</div>
<br/>
<p><em>Note: This dataset is mocked. Please do not use to make actual dining decisions.</em></p>

<p> Atlas Search Soccer implements many Atlas Search features from autocomplete to search facets. Using the $search operator in a MongoDB aggregation pipeline, we can build fine-grained searches across text, numerics, and geospatial data. By building out your FIFA dream team, you'll learn all sorts of ways MongoDB allows you to build complex, fine-grained full-text searches on your Atlas data.</p>

**No additional servers or software needed. No need to keep data in sync. Everything is done in MongoDB Atlas.**

- fuzzy matching
- wildcard
- autocomplete
- range queries
- facets
- relevance-based scoring

<p>Check out the video to see a demonstration of all the features or visit the link below to play around with the finished application, hosted entirely in MongoDB Atlas:</p>
<h2 align="center"><a href="https://www.atlassearchsoccer.com">www.atlassearchsoccer.com</a></h2>

<p>This application is hosted entirely by MongoDB Atlas was created using:</p>

- React
- Tailwind CSS
- MongoDB Realm for backend HTTPs endpoints and webhooks
- A FIFA 22 player dataset found on kaggle // -----------link to and credit -------------

<p float="left">
    <img src="WhatsCookingArchitecture.png" width="750"  />
</p>

<p><em>Currently this app is not suitable for mobile, but feel free to send a PR.</em> 😊</p>

<h3>Prerequisites</h3>

- A MongoDB Atlas account. Get one for free <a href="https://www.mongodb.com/cloud/atlas">here.</a>
- A recent version of Node.js and npm.
- EA FIFA 22 player dataset (players22.json) provided in the data folder.
- (Recommended) <a href="https://www.mongodb.com/try/download/compass">MongoDB Compass - GUI</a>

<p>You can read and download the dataset using the MongoDB Shell, any MongoDB driver, or my favorite MongoDB Compass using the following URI:</p>

<pre>
  <code>
mongodb+srv://mongodb:atlassearch@shareddemoapps.dezdl.mongodb.net/whatscooking
</code>
</pre>

<p>It is also included in this repo's data folder as <pre>whatscooking.json</pre></p>

---

<h2>To Run This Application....</h2>

1. Clone the repo.
2. Navigate inside `WhatsCooking` directory.
3. Run <code>npm install</code> .
4. Run <code>npm start </code> .

---

<h2>To Build This Application...</h2>

<h2>Prepare Data</h2>

<ol>
<li> Load data to Atlas cluster:
<ul>
<li>database: <code>whatscooking</code></li>
<li>collection: <code>restaurants</code></li>
</ul>
</li>

<li> Create Search indexes. (Index definitions includes in `supplement-files` .)</li>
</ol>

<h2>React Components....</h2>
<p float="left">
    <img src="" width="550"  />
</p>

<h2>Using Realm as Your Serverless Backend....</h2>
<p>AtlasSearchSoccer uses HTTP services in Realm to create 5 APIs to allow you to query for your restaurant data over HTTP: </p>

- `GetRestaurantsEndPoint` called from the `useHomeFetch.js` hook.
- `GetFacetsEndpoint` called from the `useHomeFetch.js` hook.
- `Suggestions_AC_Endpoint` called from the `SearchBar.js` component.
- `getSynonyms` called in the `SynonymsPage.js`.
<p float="left">
    <img src="RestaurantsFunction.png" width="550"  />
</p>
<hr>
<p float="left">
    <img src="" width="550"  />
</p>
<hr>
<p float="left">
    <img src="ACFunction.png" width="550"  />
</p>
<hr>
<p float="left">
    <img src="" width="550"  />
</p>
<hr>

As you choose your players, they are written to local storage on your device so that your dream team persists even after you close your browser.
Find the Realm application and code for these webhooks in the <code>AtlasSearchSoccer_Realm</code> folder.</p>

<h5>If you have any questions or feedback about this repo, feel free to create an Issue or PR in this repo or reach out to me on Twitter @YouOldMaid.</h5>

<h4>Also please join our online <a href="https://developer.mongodb.com/community/forums/">MongoDB Community</a> to interact with our product and engineering teams along with thousands of other MongoDB and Realm users. <br/><br/>Have fun and happy coding!</h4></h4>

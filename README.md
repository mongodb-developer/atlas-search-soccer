<h1 align="center">Atlas Search Soccer</h1>

<h2 align="center">Build your Soccer Dream Team with MongoDB Atlas Search</h2>

Every four years, for the sake of blending in, I pretend to know soccer. When the World Cup is on, I’m overwhelmed by the exuberant fans with colorful soccer jerseys. Jerseys with unfamiliar names from far away places. I recognize Messi and Ronaldo, but the others …? Mkhitaryan, Szczęsny, Großkreutz? How can I look up their stats to feign familiarity when I have no idea how to spell their names?

Well, now there's this app for that. <a href="https://www.atlassearchsoccer.com"><b>Atlas Search Soccer</b></a> is an interactive Atlas Search tutorial and instant sports bar credibility builder.

<p align="center">
    <img src="readmeImages/soccerDemo.gif" width="400"  />
</p>

Teaming up MongoDB Atlas Search with an extensive player dataset, you can scout across the over 22,000 players in the database based on a variety of search parameters and data types:

- player name
- player position
- nationality
- club
- skill level
- age
- salary

Equipped with only a search box, sliders and checkboxes, find the world's best players with the most impossible-to-spell names to build out your own Soccer Dream Team. Autocomplete, wildcard, and filters to find Ibrahimović, Błaszczykowski, and Szczęsny? No problem!

As you interact with the application, you'll see the `$search` operator in a MongoDB aggregation pipeline live in-action!

When you pick a footballer for your team, he is written to local storage on your device. That way, your Dream Team stays warmed up and on the pitch even after you close your browser.

<h4>Skills and Drills</h4>

- search operators:
  - text
  - wildcard
  - autocomplete
  - range
- fuzzy matching
- indexes and analyzers
- compound operator
- relevance based scoring
- custom score modifiers
- filters, facets and counts

So give it a shot, and you'll be an Atlas Search pro in no time!

<h4 align="center"> <span ><a href="https://www.atlassearchsoccer.com">www.atlassearchsoccer.com</a></span>  ⚽ </h4>
<p align="center">
    <img src="readmeImages/football-is-life-ted-lasso.gif" width="400"  />
</p>
<h6>Game Notes 📝</h6>
<p>This application hosted entirely by MongoDB Atlas was created using:</p>

- React
- Tailwind CSS
- Atlas App Services for backend HTTPs endpoints and webhooks
- A [FIFA22 player dataset](https://www.kaggle.com/datasets/bryanb/fifa-player-stats-database)

<p><em>Currently this app is not suitable for mobile, but feel free to send a PR.</em> 😊</p>
<hr>

<h4>Want to play in your own stadium? Here's how to build Atlas Search Soccer on your own free cluster.
</h4>

Atlas Search Soccer runs on a very streamlined game plan where MongoDB Atlas is the MVP.
**No additional servers or software needed. No need to keep data in sync. Everything is done in MongoDB Atlas.**

<p float="left">
    <img src="readmeImages/Architecture.png" width="750"  />
</p>

<h3>Prerequisites</h3>

- A MongoDB Atlas account. Get one for free <a href="https://www.mongodb.com/cloud/atlas">here.</a>
- A recent version of Node.js and npm.
- Extensive worldwide player dataset (players22.json) provided in the data folder.
- (Recommended) <a href="https://www.mongodb.com/try/download/compass">MongoDB Compass - GUI</a>

It is also included in this repo's data folder as <pre>players22.json</pre>

---

<h6>To Run This Application....</h6>

1. Clone the repo.
2. Navigate inside `atlas-search-soccer` directory.
3. Run <code>npm install</code> .
4. Run <code>npm start </code> .

---

<h6>Prepare Data</h6>

Load data to Atlas cluster:

<ul>
<li>database: <code>soccer</code></li>
<li>collection: <code>players22</code></li>
</ul>

<h2>React Components....</h2>

  <img src="/readmeImages/Main.png" width="500" />
  <img src="/readmeImages/SearchResults.png" width="550" /> 
  <img src="readmeImages/Filters.png" width="550" />

<h2>Using Atlas App Services as Your Serverless Backend....</h2>
<p>AtlasSearchSoccer uses HTTP services in App Services to create 5 APIs to allow you to query for your player data over HTTP: </p>

The data is queried from `useHomeFetch.js` in the `hooks` directory.
Here you'll find the endpoints for the backend search queries using the `$search` operator:

- `BasicSearchEndPoint`
- `WildcardEndPoint`
- `AutocompleteEndpoint`
- `AdvancedSearchEndPoint`
- `FacetsEndPoint`
  Find the code for these webhooks in the <code>AppServices</code> folder.</p>

<hr>

<p>If you have any questions or feedback about this repo, feel free to create an Issue or PR in this repo or reach out to me on Twitter @YouOldMaid.</p>

<p>Also please join our online <a href="https://developer.mongodb.com/community/forums/">MongoDB Community</a> to interact with our product and engineering teams along with thousands of other MongoDB and Realm users. 
<br/><br/>Have fun and happy coding!</p></h4>

## Disclaimer

Use at your own risk; not a supported MongoDB product

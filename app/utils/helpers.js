// Include the Axios library for HTTP requests
var axios = require("axios");

// NYT API Key (Replace with your own API Key)
var APIKey = "7449293569846535";

// Helper Functions
var helpers = {
  

  // This will run our query.
  runQuery: function(jobTitle, location) {
    return axios.post("/logger")
      .then(function(userData) {
    // Adjust to get search terms in proper format
    console.log(userData);
    var formattedJobTitle = jobTitle.trim();
    var formattedLocation = location.trim();
    var userIP = userData.data.ip;
    var userAgent = userData.data.agent;

    console.log("Query Run");
    // Run a query using Axios. Then return the results as an object with an array.
    // See the Axios documentation for details on how we structured this with the params.
    return axios.get("http://api.indeed.com/ads/apisearch?publisher=7449293569846535&v=2&latlong=1&filter=1", {
      params: {
        "l": formattedLocation,
        "userip": userIP,
        "useragent": userAgent,
        "q": formattedJobTitle
      }
    })
    .then(function(data) {
      console.log("Axios Results", data.results);
      return data.results;
    });
  });
  },
  // This will return any saved articles from our database
  getSaved: function() {
    return axios.get("/api/saved")
      .then(function(results) {
        console.log("axios results", results);
        return results;
      });
  },
  // This will save new articles to our database
  postSaved: function(title, date, url) {
    var newArticle = { title: title, date: date, url: url };
    return axios.post("/api/saved", newArticle)
      .then(function(response) {
        console.log("axios results", response.data._id);
        return response.data._id;
      });
  },
  // This will remove saved articles from our database
  deleteSaved: function(title, data, url) {
    return axios.delete("/api/saved", {
      params: {
        "title": title,
        "data": data,
        "url": url
      }
    })
    .then(function(results) {
      console.log("axios results", results);
      return results;
    });
  }
};


// We export the helpers function
module.exports = helpers;

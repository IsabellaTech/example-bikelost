const settings = {
  "name": "frontity-example",
  "state": {
    "frontity": {
      "url": "https://bikelost.com",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Bikes",
              "/bikes/"
            ],
            [
              "cars",
              "/cars/"
            ],
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://bikelost.com/"
        },
        "postTypes": [
          {
            "type": "bike", // type slug
            "endpoint": "bike", // REST API endpoint
            "archive": "/bikes" // link where this custom posts are listed
          },
          {
            "type": "car", // type slug
            "endpoint": "car", // REST API endpoint
            "archive": "/cars" // link where this custom posts are listed
          },
        ],
        "taxonomies": [
          {
            "taxonomy": "taxonomy_town",
            "endpoint": "taxonomy_town",
            "postTypeEndpoint": "town",
          },
        ],
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;

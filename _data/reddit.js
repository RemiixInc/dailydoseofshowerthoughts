var request = require("sync-request");
// make the request
var res = request(
  "GET",
  `https://www.reddit.com/r/showerthoughts/hot/.json?limit=10`,
  {
    headers: {
      "user-agent": "RemiixInc"
    }
  }
);
// parse response
res = JSON.parse(res.getBody())
var data = {post: res.data.children[4].data.title, author: "U/" + res.data.children[4].data.author_fullname}
module.exports = data;

var request = require("sync-request");
// make the request
var res = request("GET", "https://api.github.com/users/RemiixInc", {
  headers: {
    "user-agent": "RemiixInc"
  }
});

// parse response
res = JSON.parse(res.getBody());
module.exports = res;

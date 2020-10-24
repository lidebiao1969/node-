var http = require("http");
var url = require("url");
var util = require("util");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain; charset=gbk" });
    loadPage(req, res);
    //  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    // res.end(util.inspect(url.parse(req.url, true)));
  })
  .listen(4000);

function loadPage(req, res) {
  var iconv = require("iconv-lite");
  var option = {
    hostname: "www.safehoo.com",
    path: "/News/News/China/202008/1607208.shtml",
  };
  var req1 = http
    .request(option, function (res1) {
      res1.on("data", function (chunk) {
        // console.log(iconv.decode(chunk, "gbk"));

        res.write(iconv.decode(chunk, "gbk"));
        res.end();
      });
    })
    .on("error", function (e) {
      console.log(e.message);
    });
  req1.end();
}

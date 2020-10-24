var http = require("http");
var cheerio = require("cheerio");
var fs = require("fs");
var url = "http://sports.sina.com.cn/nba/5.shtml";

http
  .get(url, function (res) {
    var html = "";
    res.on("data", function (chunk) {
      html += chunk;
    });
    res.on("end", function () {
      console.log("hhh1");
      // filewrite("sports.html", html);
      var $ = cheerio.load(html);
      $("#right a").each(function () {
        //  console.log("hhh");
        console.log($(this).text());
        var data = $(this).text();
        filewrite("sports.html", data);
      });
    });
  })
  .on("error", function (err) {
    console.log(err.message);
  });

function filewrite(name, data) {
  fs.writeFile(name, data, function (err) {
    if (err) {
      return console.error(err);
    }
    //  console.log("数据写入成功！");
  });
}

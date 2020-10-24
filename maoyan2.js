var https = require("https");
var cheerio = require("cheerio");
var fs = require("fs");
//   var url = "https://sports.sina.com.cn/nba/5.shtml";

var url = "https://maoyan.com/#movie";
get_network_data(url, function ($) {
  var x = 1;
  // var movieArr = [];
  $(".movie-item a").each(function () {
    var news_url = $(this).attr("href");

    console.log(news_url);
    // get_network_data(news_url, function ($) {
    //   var article = $("#artibody").text();

    //   fs.writeFileSync("./news/" + x++ + ".txt", article);
    //   console.log("comlete");
    // });
  });
});

function get_network_data(url, cb) {
  https
    .get(url, function (res) {
      var html = "";
      res.on("data", function (chunk) {
        html += chunk;
      });
      res.on("end", function () {
        var $ = cheerio.load(html);
        cb($);
      });
    })
    .on("error", function (err) {
      console.log(err.message);
    });
}

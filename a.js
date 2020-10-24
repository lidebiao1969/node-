const request = require("request");
const cheerio = require("cheerio");

//传递 HTML document
const url = "http://127.0.0.1:5500/index.html";
request(url, function (err, response, body) {
  //此时body即为 HTML document
  const $ = cheerio.load(body);

  console.log("html", $);
});
//传递标签字符串
const $ = cheerio.load('<div class="text">...</div>');
console.log("text", $);

var https = require("https");
var fs = require("fs");
var url = "https:////maoyan.com/";

https: https
  .get(url, function (res) {
    var html = "";
    res.on("data", function (chunk) {
      html += chunk;
    });
    res.on("end", function () {
      // console.log(html);
      filewrite(html);
    });
  })
  .on("error", function (err) {
    console.log({ error: err.statusMessage });
  });

function filewrite(data) {
  fs.writeFile("maoyan.html", data, function (err) {
    if (err) {
      return console.error(err);
    }
    console.log("数据写入成功！");

    // fs.readFile("input.txt", function (err, data) {
    //   if (err) {
    //     return console.error(err);
    //   }
    //   console.log("异步读取文件数据: " + data.toString());
    // });
  });
}

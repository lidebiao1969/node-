// const request = require("request");
const cheerio = require("cheerio");
const https = require("https");
var url = "https://maoyan.com/";
function getMovies(url) {
  var movieArr = [];

  return new Promise((resolve, reject) => {
    https.get(url, function (res) {
      const $ = cheerio.load(body);
      var item = $(".movie-list dd");
      item.map(function (i, val) {
        var movieObj = {};

        //电影链接
        movieObj.movieLink = $(val)
          .find(".movie-poster")
          .children("a")
          .attr("href");
        console.log(movieObj.movieLink);
        //电影图片
        movieObj.moviePoster = $(val)
          .find(".movie-item")
          .children("img")
          .last()
          .attr("data-src");
        //电影 名字
        movieObj.movieTitle = $(val)
          .find(".movie-item-title")
          .children("a")
          .text();
        //电影评分
        movieObj.movieDetail = $(val).find(".channel-detail-orange").text();

        //把抓取到的内容 放到数组里面去
        movieArr.push(movieObj);
      });

      //说明 数据获取完毕
      if (movieArr.length > 0) {
        resolve(movieArr);
        console.log(movieArr);
      }
    });
  });
}
// "https://maoyan.com/films?showType=1";
//获取正在热映电影数据
getMovies(url).then((data) => {
  console.log(data);
});

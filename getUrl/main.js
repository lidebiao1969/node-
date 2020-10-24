var http = require("http");
var url = require("url");
var util = require("util");

http
  .createServer(function (req, res) {
    const axios = require("axios");
    // const cheerio = require("cheerio");
    axios
      .get(
        "https://www.zhipin.com/job_detail/?query=&city=101120100&industry=&position=100901",
        {
          headers: {
            cookie:
              "lastCity=101120100; __zp_seo_uuid__=e18d8f7b-6c6f-4706-bfef-61c155d50c81; Hm_lvt_194df3105ad7148dcf2b98a91b5e727a=1583497382,1584362054,1585650181; __c=1585650181; __g=-; __l=l=%2Fwww.zhipin.com%2Fjinan%2F&r=https%3A%2F%2Fwww.google.com%2F&friend_source=0&friend_source=0; __zp_stoken__=6349tRPT%2B%2FZRuGAtTm9brIZTycgp8FhwkY%2BXWwZOoum8MYdM2EVIU20N6leGhELWjB9YyvNy1s%2Bf2RUTphzSSqiQuUzR8rVhtNuOHDp1Q7rD7z0V9hNHJ%2F5eNBgltnVn4bYd; __a=38005021.1583497382.1584362053.1585650181.11.3.3.11; Hm_lpvt_194df3105ad7148dcf2b98a91b5e727a=1585650199; __zp_sseed__=Yii38ZCE2lVjTVMJ4r+tgZUxi/pSy3WLbXUyd5+f53E=; __zp_sname__=8285564b; __zp_sts__=1585651819105",
          },
        }
      )
      .then((res1) => {
        // console.log(res1.data);
        // let dom = cheerio.load(res.data);
        // console.log(dom("title").text());

        res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
        res.write(res1.data);
        res.end();
      });
  })
  .listen(4000);

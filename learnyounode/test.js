var http = require('http'),
		bl = require('bl'),
    async = require('async'),
    urls = process.argv.slice(2);

async.eachSeries(urls, function (url, callback) {
  http.get(url, function (response) {
    response.pipe(bl(function (err, data) {
      if (err) callback(err);
      console.log(data.toString());
      callback();
    }));
  });
});

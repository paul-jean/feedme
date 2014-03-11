var exec = require('child_process').exec;

function sleep(millis) {
  var startTime = new Date().getTime();
  while (new Date().getTime() < startTime + millis);
}

function start(response) {
  console.log("Request handler start was called.");

  exec('ls -lha', function(err, stdout, stderr) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(stdout);
    response.end();
  });
}

function upload(response) {
  console.log("Request handler upload was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello Upload");
  response.end();
}

exports.start = start;
exports.upload = upload;

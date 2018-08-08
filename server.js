var execFile = require('child_process').execFile;
var githubhook = require('githubhook');
var config = require('./config.json');
var github = githubhook({
    host: config.host,
    port: config.port,
    path: config.url,
    secret: config.password,
    logger: console,
});

github.listen();

github.on('deploy-ex:refs/heads/master', function (data) {
    // Exec a shell script
    var execOptions = {
        maxBuffer: 2048 * 2048 // Increase max buffer
    };
    execFile(config.script, execOptions, function(error, stdout, stderr) {
        if( error )
        {
            console.log(error)
        }
    });
});

var execFile = require('child_process').execFile;
var githubhook = require('githubhook');
var github = githubhook({
    host: '185.49.84.106',
    port: 3420,
    path: '/gitback',
    secret: 'my-secret',
    logger: console,
});

github.listen();

github.on('deploy-ex:refs/heads/master', function (data) {
    // Exec a shell script
    var execOptions = {
        maxBuffer: 2048 * 2048 // Increase max buffer
    };
    execFile('/home/alaa/deploy/deploy.sh', execOptions, function(error, stdout, stderr) {
        if( error )
        {
            console.log(error)
        }
    });
});

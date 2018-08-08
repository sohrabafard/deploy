<article class="single">
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-push-2">
                <p>Let's get to automating! This video will show you how to use NodeJS to listen for GitHub webhooks, and kick off an automated (zero-downtime!) deployment script when we push to our master branch.We'll setup an SSH keypair and install NodeJS so that the server can listen for web hooks and can push/pull to and from the project repository.</p>
<h3>Deploy Hook</h3>
<p>On the production server, generate an SSL certificate for the deploy user, and add the resulting public key to Github as a Deploy hook.</p>
<p>Create <code>id_rsa</code> if not exists, else use <code>id_rsa.pub</code>:</p>
<pre><code class="hljs bash"><span class="hljs-built_in">cd</span> ~/.ssh
ssh-keygen -t rsa -b 4096 -f id_rsa</code></pre>
<p>Paste the contents of the <code>id_rsa.pub</code> file into the Github repository as a deploy hook within the repository settings.</p>
<h3>Web Listener</h3>
<p>We need a web listener listening for Github webhooks. Anything that can listen for web hooks will do, but I like NodeJS because small, can listen over HTTP without need of being proxied to from a web server (Nginx, Apache, etc), and can run shell scripts in a solid fashion.</p>
<p>Here's a Node.JS version of a webhook listener!</p>
<h4>Install Node.JS</h4>
<pre><code class="language-bash hljs">curl -sL https://deb.nodesource.com/setup | sudo bash -
sudo apt-get install -y nodejs</code></pre>
<h4>Create Listener</h4>
<p>Within our "production" server:</p>
<pre><code class="language-bash hljs"><span class="hljs-comment"># Log in as user fideloper for sudo</span>
<span class="hljs-comment"># but use our deployer user's home directory</span>
<span class="hljs-comment"># Run commands as user "deployer"</span>
sudo -u deployer mkdir /home/deployer/deploy
<span class="hljs-built_in">cd</span> /home/deployer/deploy
sudo -u deployer npm init
sudo -u deployer npm install --save githubhook</code></pre>
<p>Use <code>githubhook</code> library at <code>/home/deployer/deploy/server.js</code></p>
<pre><code class="language-javascript hljs"><span class="hljs-keyword">var</span> execFile = <span class="hljs-built_in">require</span>(<span class="hljs-string">'child_process'</span>).execFile;
<span class="hljs-keyword">var</span> githubhook = <span class="hljs-built_in">require</span>(<span class="hljs-string">'githubhook'</span>);
<span class="hljs-keyword">var</span> github = githubhook({
    <span class="hljs-attr">host</span>: <span class="hljs-string">'0.0.0.0'</span>,
    <span class="hljs-attr">port</span>: <span class="hljs-number">3420</span>,
    <span class="hljs-attr">path</span>: <span class="hljs-string">'/gitback'</span>,
    <span class="hljs-attr">secret</span>: <span class="hljs-string">'my-secret'</span>,
    <span class="hljs-attr">logger</span>: <span class="hljs-built_in">console</span>,
});

github.listen();

github.on(<span class="hljs-string">'deploy-ex:refs/heads/master'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">data</span>) </span>{
    <span class="hljs-comment">// Exec a shell script</span>
    <span class="hljs-keyword">var</span> execOptions = {
        <span class="hljs-attr">maxBuffer</span>: <span class="hljs-number">1024</span> * <span class="hljs-number">1024</span> <span class="hljs-comment">// Increase max buffer to 1mb</span>
    };
    execFile(<span class="hljs-string">'/home/deployer/deploy/deploy.sh'</span>, execOptions, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">error, stdout, stderr</span>) </span>{
        <span class="hljs-keyword">if</span>( error )
        {
            <span class="hljs-built_in">console</span>.log(error)
        }
    });
});</code></pre>
<p>Within GitHub repository settings, we'll need to add the Webhook settings to point to our production server on the correct port. Add the secret used in the NodeJS script as well:</p>
<pre><code class="hljs php">http:<span class="hljs-comment">//104.236.85.162:3420/gitback</span>
my-secret</code></pre>
<h3>Create Deploy Shell Script</h3>
<p>This will do basically what we configured Envoy to do, but on the server as a shell script at <code>/home/deployer/deploy/deploy.sh</code>:</p>
<pre><code class="language-bash hljs"><span class="hljs-meta">#!/usr/bin/env bash
</span>
REPO=<span class="hljs-string">'git@github.com:Servers-for-Hackers/deploy-ex.git'</span>;
RELEASE_DIR=<span class="hljs-string">'/var/www/releases'</span>;
APP_DIR=<span class="hljs-string">'/var/www/app'</span>;
RELEASE=<span class="hljs-string">"release_`date +%Y%m%d%H%M%s`"</span>;

<span class="hljs-comment"># Fetch Latest Code</span>
[ -d <span class="hljs-variable">$RELEASE_DIR</span> ] || mkdir <span class="hljs-variable">$RELEASE_DIR</span>;
<span class="hljs-built_in">cd</span> <span class="hljs-variable">$RELEASE_DIR</span>;
git <span class="hljs-built_in">clone</span> -b master <span class="hljs-variable">$REPO</span> <span class="hljs-variable">$RELEASE</span>;

<span class="hljs-comment"># Composer</span>
<span class="hljs-built_in">cd</span> <span class="hljs-variable">$RELEASE_DIR</span>/<span class="hljs-variable">$RELEASE</span>;
composer install --prefer-dist --no-scripts;
php artisan clear-compiled --env=production;
php artisan optimize --env=production;

<span class="hljs-comment"># Symlinks</span>
ln -nfs <span class="hljs-variable">$RELEASE_DIR</span>/<span class="hljs-variable">$RELEASE</span> <span class="hljs-variable">$APP_DIR</span>;
chgrp -h www-data <span class="hljs-variable">$APP_DIR</span>;

<span class="hljs-comment">## Env File</span>
<span class="hljs-built_in">cd</span> <span class="hljs-variable">$RELEASE_DIR</span>/<span class="hljs-variable">$RELEASE</span>;
ln -nfs ../../.env .env;
chgrp -h www-data .env;

<span class="hljs-comment">## Logs</span>
rm -r <span class="hljs-variable">$RELEASE_DIR</span>/<span class="hljs-variable">$RELEASE</span>/storage/logs;
<span class="hljs-built_in">cd</span> <span class="hljs-variable">$RELEASE_DIR</span>/<span class="hljs-variable">$RELEASE</span>/storage;
ln -nfs ../../../logs logs;
chgrp -h www-data logs;

<span class="hljs-comment">## Update Currente Site</span>
ln -nfs <span class="hljs-variable">$RELEASE_DIR</span>/<span class="hljs-variable">$RELEASE</span> <span class="hljs-variable">$APP_DIR</span>;
chgrp -h www-data <span class="hljs-variable">$APP_DIR</span>;

<span class="hljs-comment">## PHP</span>
sudo service php5-fpm reload;</code></pre>
<h3>Test It</h3>
<p>We'll update our code with a new route and then push that to the master branch. If the <code>/deployed</code> page works, then our automated deployment was a success!</p>
<p>Ensure the NodeJS listener is active:</p>
<pre><code class="language-bash hljs">node /home/deployer/deploy/server.js</code></pre>
<p>Then we add a route to the framework's <code>routes.php</code> file:</p>
<pre><code class="language-php hljs">Route::get(<span class="hljs-string">'/deployed'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">()</span> </span>{
    <span class="hljs-keyword">return</span> <span class="hljs-string">"New Route!"</span>;
});</code></pre>
<h3>Monitoring NodeJS Listener</h3>
<p>We can't leave NodeJS to its own devices - we should install something to make sure it's always up and running.</p>
<p>The video uses Debian 7 with Systemd enabled/installed. For systems with Systemd, we can add a unit file (service) to monitor the NodeJS listener.</p>
<h4>Systemd</h4>
<p>Add the following service configuration to file <code>/lib/systemd/system/deploy.service</code>:</p>
<pre><code class="hljs sql">[Unit]
Description=Webhook

[Service]
User=deployer
Group=www-data
Restart=on-failure
ExecStart=/usr/bin/node /home/deployer/deploy/server.js`

[<span class="hljs-keyword">Install</span>]
WantedBy=multi-user.target</code></pre>
<p>Then run:</p>
<pre><code class="language-bash hljs"><span class="hljs-comment"># Enable service unit file</span>
systemctl <span class="hljs-built_in">enable</span> deploy.service

<span class="hljs-comment"># Check its status and start it</span>
sudo service deploy status
sudo service deploy start</code></pre>
<h4>Upstart</h4>
<p>On Ubuntu, or any system using Upstart, we can add the following configuration and use that instead:</p>
<p>Add this configuration to file <code>/etc/init/deploy.conf</code>:</p>
<pre><code class="language-conf">description "NodeJS Webhook Listener"

start on filesystem or runlevel [2345]
stop on runlevel [!2345]

setuid deployer
setgid www-data

respawn
respawn limit 5 2

script
    /usr/bin/node /home/deployer/deploy/server.js`
end script</code></pre>
<p>Then get its status and start it:</p>
<pre><code class="language-bash hljs">sudo service deploy status
sudo service deploy start </code></pre>
<h3>Firewalls</h3>
<p>Lastly we need to ensure Git can send webhooks to our listen. Configure it to accept connections on port 3420:</p>
<pre><code class="language-bash hljs"><span class="hljs-comment"># Place rule at the 4th position of the INPUT chain</span>
<span class="hljs-comment"># This assumes the 4th position is before any rule </span>
<span class="hljs-comment">#  potentially dropping tcp traffic over port 3420</span>
sudo iptables -I INPUT 4 -p tcp --dport 3420 -j ACCEPT</code></pre>
            </div>
        </div>
    </div>
</article>

Ref: https://serversforhackers.com/c/automating-deployment-from-github

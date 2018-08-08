<html lang="en"><head><style class="vjs-styles-defaults">
      .video-js {
        width: 300px;
        height: 150px;
      }

      .vjs-fluid {
        padding-top: 56.25%
      }
    </style><style class="vjs-styles-dimensions">
      .vjs-video-current-dimensions {
        width: 100px;
        height: 56.25px;
      }

      .vjs-video-current-dimensions.vjs-fluid {
        padding-top: 56.25%;
      }
    </style>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="4HQv42pxFbW3XmASmSwqie3JX83KXtAEl8Jwssdh">
    <link rel="icon" href="/favicon-inverted.png">
        <title>Automating Deployment from GitHub | Servers for Hackers</title>
    <script async="" src="https://www.google-analytics.com/analytics.js"></script><script type="text/javascript" async="" src="//tag.getdrip.com/7671096.js"></script><script async="" src="https://connect.facebook.net/en_US/fbevents.js"></script><script>
        window.current_video = 'Automating Deployment from GitHub';
        window.current_video_slug = 'automating-deployment-from-github';
        window.current_topic = 'php';
    </script>
    <!--Facebook Metadata /-->
<meta property="og:image" content="https://serversforhackers.com/img/sfh-social.png">
<meta property="og:description" content="Let's get to automating! This video will show you how to use NodeJS to listen for GitHub webhooks, and kick off an automated (zero-downtime!) deployment script when we push to our master branch.">
<meta property="og:title" content="Automating Deployment from GitHub">

<!--Google+ Metadata /-->
<meta itemprop="name" content="Automating Deployment from GitHub">
<meta itemprop="description" content="Let's get to automating! This video will show you how to use NodeJS to listen for GitHub webhooks, and kick off an automated (zero-downtime!) deployment script when we push to our master branch.">
<meta itemprop="image" content="https://serversforhackers.com/img/sfh-social.png">

<!-- Twitter Metadata /-->
<meta name="twitter:card" content="summary">
<meta name="twitter:site" content="@srvrsforhackers">
<meta name="twitter:title" content="Automating Deployment from GitHub">
<meta name="twitter:description" content="Let's get to automating! This video will show you how to use NodeJS to listen for GitHub webhooks, and kick off an automated (zero-downtime!) deployment script when we push to our master branch.">
<meta name="twitter:image" content="https://serversforhackers.com/img/sfh-social.png">
<meta name="twitter:domain" content="serversforhackers.com">
    <script type="application/ld+json">
        {
      "@context": "http://schema.org",
      "@type": "VideoObject",
      "name": "Automating Deployment from GitHub",
      "description": "Let's get to automating! This video will show you how to use NodeJS to listen for GitHub webhooks, and kick off an automated (zero-downtime!) deployment script when we push to our master branch.",
      "thumbnailUrl": "https://i.vimeocdn.com/video/513707862_640x360.jpg?r=pad",
      "uploadDate": "2015-04-21T00:00:00+0000",
      "duration": "PT15M35S",
      "publisher": {
        "@type": "Organization",
        "name": "Servers for Hackers",
        "logo": {
          "@type": "ImageObject",
          "url": "https://serversforhackers.com/img/sfh-social.png"
        }
      },
      "contentUrl": "https://serversforhackers.com/c/automating-deployment-from-github",
      "embedUrl": "http://player.vimeo.com/external/124109695.hd.mp4?s=68b4cce208768bfbfd0c31a938c87dc7&amp;profile_id=113"
    }
     
        </script>
    <!-- Styles -->
    <link href="/css/app.css?id=e3c5e43f1c4d38dafc2a" rel="stylesheet">
    <script>
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
        n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
        document,'script','https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '528898333987272'); // Insert your pixel ID here.
    fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=528898333987272&ev=PageView&noscript=1"/></noscript>    <script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<script>
  (adsbygoogle = window.adsbygoogle || []).push({
    google_ad_client: "ca-pub-4857751629906459",
    enable_page_level_ads: true
  });
</script><meta name="chromesniffer" id="chromesniffer_meta" content="{&quot;jQuery&quot;:&quot;3.3.0&quot;,&quot;Underscore.js&quot;:&quot;4.17.4&quot;,&quot;SPDY&quot;:-1}"><script type="text/javascript" src="chrome-extension://fbnlibmhkkkpncdgfolnijebgnmbdbhi/detector.js"></script><meta name="chromesniffer" id="chromesniffer_meta"><script type="text/javascript" src="chrome-extension://fhhdlnnepfjhlhilgmeepgkhjmhhhjkh/js/detector.js"></script><meta name="chromesniffer" id="chromesniffer_meta"><script type="text/javascript" src="chrome-extension://homgcnaoacgigpkkljjjekpignblkeae/detector.js"></script><script style="display: none;">var tvt = tvt || {}; tvt.captureVariables = function(a){for(var b=
new Date,c={},d=Object.keys(a||{}),e=0,f;f=d[e];e++)if(a.hasOwnProperty(f)&&"undefined"!=typeof a[f])try{var g=[];c[f]=JSON.stringify(a[f],function(a,b){try{if("function"!==typeof b){if("object"===typeof b&&null!==b){if(b instanceof HTMLElement||b instanceof Node||-1!=g.indexOf(b))return;g.push(b)}return b}}catch(H){}})}catch(l){}a=document.createEvent("CustomEvent");a.initCustomEvent("TvtRetrievedVariablesEvent",!0,!0,{variables:c,date:b});window.dispatchEvent(a)};window.setTimeout(function() {tvt.captureVariables({'dataLayer.hide': (function(a){a=a.split(".");for(var b=window,c=0;c<a.length&&(b=b[a[c]],b);c++);return b})('dataLayer.hide'),'gaData': window['gaData'],'dataLayer': window['dataLayer']})}, 2000);</script></head>

<!--


Hello! How are you?

Some tips:

1. Use the "/" key (question mark key, but no shift key) to open up the Topic Browser
2. Follow me @fideloper, not because I WANT TO SELL YOU THINGS, but because it's the easiest place to find out about new content
3. Let me know if you see this! There's no prize, I'm just curious.

-->
<body>
<a href="https://serversforhackers.com/c/automating-deployment-from-github">Refrence</a>
    <div class="throwing-shade shade-divider"></div>
    <div id="app" class="single-page">
        <div id="masthead" class="dark clearfix">
            <div class="signal signal-bottom signal-bottom-short">
                <nav class="navbar navbar-sfh">
                    <div class="container" id="searchapp">
                        <div class="col-md-10 col-md-push-1 nav-border clearfix">
                            <div class="navbar-header">
                                <!-- Branding Image -->
                                <a class="navbar-brand-sfh" href="https://serversforhackers.com">
                                    <img src="/img/sfh-logo.svg" alt="">
                                </a>
                            </div>
                            <div class="nav navbar-nav navbar-right clearfix" id="search-container">
                                
                                <div class="aa-input-container" id="aa-input-container">
                                    <span class="algolia-autocomplete" style="position: relative; display: inline-block; direction: ltr;"><input type="search" class="aa-input-search aa-hint" autocomplete="off" readonly="" aria-hidden="true" spellcheck="false" tabindex="-1" style="position: absolute; top: 0px; left: 0px; border-color: transparent; box-shadow: none; opacity: 1; background: none 0% 0% / auto repeat scroll padding-box border-box rgb(55, 62, 69);"><input type="search" id="aa-search-input" class="aa-input-search aa-input" name="search" autocomplete="off" spellcheck="false" role="combobox" aria-autocomplete="both" aria-expanded="false" aria-owns="algolia-autocomplete-listbox-0" dir="auto" style="position: relative; vertical-align: top; background-color: transparent;"><pre aria-hidden="true" style="position: absolute; visibility: hidden; white-space: pre; font-family: Roboto, sans-serif; font-size: 16px; font-style: normal; font-variant: normal; font-weight: 400; word-spacing: 0px; letter-spacing: normal; text-indent: 0px; text-rendering: auto; text-transform: none;"></pre><span class="aa-dropdown-menu" role="listbox" id="algolia-autocomplete-listbox-0" style="position: absolute; top: 100%; z-index: 100; display: none; left: 0px; right: auto;"><div class="aa-dataset-1"></div></span></span>
                                    <svg class="aa-input-icon" viewBox="654 -372 1664 1664">
                                        <path d="M1806,332c0-123.3-43.8-228.8-131.5-316.5C1586.8-72.2,1481.3-116,1358-116s-228.8,43.8-316.5,131.5  C953.8,103.2,910,208.7,910,332s43.8,228.8,131.5,316.5C1129.2,736.2,1234.7,780,1358,780s228.8-43.8,316.5-131.5  C1762.2,560.8,1806,455.3,1806,332z M2318,1164c0,34.7-12.7,64.7-38,90s-55.3,38-90,38c-36,0-66-12.7-90-38l-343-342  c-119.3,82.7-252.3,124-399,124c-95.3,0-186.5-18.5-273.5-55.5s-162-87-225-150s-113-138-150-225S654,427.3,654,332  s18.5-186.5,55.5-273.5s87-162,150-225s138-113,225-150S1262.7-372,1358-372s186.5,18.5,273.5,55.5s162,87,225,150s113,138,150,225  S2062,236.7,2062,332c0,146.7-41.3,279.7-124,399l343,343C2305.7,1098.7,2318,1128.7,2318,1164z"></path>
                                    </svg>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </nav>
                <div class="container">
                    <div class="row">
                        <div class="col-md-10 col-md-push-1 tcenter">
                                                    </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- title header -->
<div class="light">
    <div class="container">
        <div class="row">
            <div class="col-md-10 col-md-push-1">
                <header class="clearfix header-clearance header-clearance-bottom tcenter single-header">
                    <div class="date">April 21, 2015</div>
                    <div class="title">
                        <h1>Automating Deployment from GitHub</h1>
                    </div>
                </header>
            </div>
        </div>
    </div>
</div>
<!-- video player -->
<div class="video-player">
    <div class="container">
        <div class="row">
            <div class="col-md-10 col-md-push-1">
                <div class="pop-up-video">
                    <div tabindex="-1" class="video-js vjs-default-skin vjs-fluid vjs-big-play-centered vjs-paused vjs-video-current-dimensions vjs-workinghover vjs-v5 vjs-user-inactive vjs-error vjs-controls-disabled" id="vjs-video-current" role="region" aria-label="video player"><video id="vjs-video-current_html5_api" class="vjs-tech" tabindex="-1" preload="auto" src="http://player.vimeo.com/external/124109695.hd.mp4?s=68b4cce208768bfbfd0c31a938c87dc7&amp;profile_id=113"><!-- poster="" -->
                                                <source src="http://player.vimeo.com/external/124109695.hd.mp4?s=68b4cce208768bfbfd0c31a938c87dc7&amp;profile_id=113" data-quality="HD" label="HD">
                                                <source src="http://player.vimeo.com/external/124109695.sd.mp4?s=14265be2e1ce6581460c4199262d4bc6&amp;profile_id=112" data-quality="SD" label="SD">
                                                <source src="http://player.vimeo.com/external/124109695.mobile.mp4?s=b7d90cff7b2b9bbca88d23f6f3ab5012&amp;profile_id=116" data-quality="MOBILE" label="MOBILE">
                                            </video><div></div><div class="vjs-poster vjs-hidden" tabindex="-1" aria-disabled="false"></div><div class="vjs-text-track-display" aria-live="off" aria-atomic="true"></div><div class="vjs-loading-spinner" dir="ltr"></div><button class="vjs-big-play-button" type="button" aria-live="polite" title="Play Video" aria-disabled="false"><span class="vjs-control-text">Play Video</span></button><div class="vjs-control-bar" dir="ltr" role="group"><button class="vjs-play-control vjs-control vjs-button" type="button" aria-live="polite" title="Play" aria-disabled="false"><span class="vjs-control-text">Play</span></button><div class="vjs-volume-menu-button vjs-menu-button vjs-menu-button-inline vjs-control vjs-button vjs-volume-menu-button-horizontal vjs-vol-3" tabindex="0" role="button" aria-live="polite" title="Mute" aria-disabled="false"><div class="vjs-menu"><div class="vjs-menu-content"><div tabindex="0" class="vjs-volume-bar vjs-slider-bar vjs-slider vjs-slider-horizontal" role="slider" aria-valuenow="100.00" aria-valuemin="0" aria-valuemax="100" aria-label="volume level" aria-valuetext="100.00%"><div class="vjs-volume-level"><span class="vjs-control-text"></span></div></div></div></div><span class="vjs-control-text">Mute</span></div><div class="vjs-current-time vjs-time-control vjs-control"><div class="vjs-current-time-display" aria-live="off"><span class="vjs-control-text">Current Time</span> 0:00</div></div><div class="vjs-time-control vjs-time-divider"><div><span>/</span></div></div><div class="vjs-duration vjs-time-control vjs-control"><div class="vjs-duration-display" aria-live="off"><span class="vjs-control-text">Duration Time</span> 0:00</div></div><div class="vjs-progress-control vjs-control"><div tabindex="0" class="vjs-progress-holder vjs-slider vjs-slider-horizontal" role="slider" aria-valuenow="NaN" aria-valuemin="0" aria-valuemax="100" aria-label="progress bar" aria-valuetext="0:00"><div class="vjs-load-progress"><span class="vjs-control-text"><span>Loaded</span>: 0%</span></div><div class="vjs-mouse-display" data-current-time="0:00" style="left: 0px;"></div><div class="vjs-play-progress vjs-slider-bar" data-current-time="0:00" style="width: 0%;"><span class="vjs-control-text"><span>Progress</span>: 0%</span></div></div></div><div class="vjs-live-control vjs-control vjs-hidden"><div class="vjs-live-display" aria-live="off"><span class="vjs-control-text">Stream Type</span>LIVE</div></div><div class="vjs-remaining-time vjs-time-control vjs-control"><div class="vjs-remaining-time-display" aria-live="off"><span class="vjs-control-text">Remaining Time</span> -0:00</div></div><div class="vjs-custom-control-spacer vjs-spacer ">&nbsp;</div><div class="vjs-playback-rate vjs-menu-button vjs-menu-button-popup vjs-control vjs-button" tabindex="0" role="menuitem" aria-live="polite" title="Playback Rate" aria-disabled="false" aria-expanded="false" aria-haspopup="true"><div class="vjs-menu" role="presentation"><ul class="vjs-menu-content" role="menu"><li class="vjs-menu-item" tabindex="-1" role="menuitemcheckbox" aria-live="polite" aria-disabled="false" aria-checked="false">2x<span class="vjs-control-text"> </span></li><li class="vjs-menu-item" tabindex="-1" role="menuitemcheckbox" aria-live="polite" aria-disabled="false" aria-checked="false">1.5x<span class="vjs-control-text"> </span></li><li class="vjs-menu-item" tabindex="-1" role="menuitemcheckbox" aria-live="polite" aria-disabled="false" aria-checked="false">1.25x<span class="vjs-control-text"> </span></li><li class="vjs-menu-item vjs-selected" tabindex="-1" role="menuitemcheckbox" aria-live="polite" aria-disabled="false" aria-checked="true">1x<span class="vjs-control-text">, selected</span></li><li class="vjs-menu-item" tabindex="-1" role="menuitemcheckbox" aria-live="polite" aria-disabled="false" aria-checked="false">0.75x<span class="vjs-control-text"> </span></li></ul></div><span class="vjs-control-text">Playback Rate</span><div class="vjs-playback-rate-value">1x</div></div><div class="vjs-chapters-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden" tabindex="0" role="menuitem" aria-live="polite" title="Chapters" aria-disabled="false" aria-expanded="false" aria-haspopup="true" aria-label="Chapters Menu"><div class="vjs-menu" role="presentation"><ul class="vjs-menu-content" role="menu"><li class="vjs-menu-title" tabindex="-1">Chapters</li></ul></div><span class="vjs-control-text">Chapters</span></div><div class="vjs-descriptions-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden" tabindex="0" role="menuitem" aria-live="polite" title="Descriptions" aria-disabled="false" aria-expanded="false" aria-haspopup="true" aria-label="Descriptions Menu"><div class="vjs-menu" role="presentation"><ul class="vjs-menu-content" role="menu"><li class="vjs-menu-item vjs-selected" tabindex="-1" role="menuitemcheckbox" aria-live="polite" aria-disabled="false" aria-checked="true">descriptions off<span class="vjs-control-text">, selected</span></li></ul></div><span class="vjs-control-text">Descriptions</span></div><div class="vjs-subtitles-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden" tabindex="0" role="menuitem" aria-live="polite" title="Subtitles" aria-disabled="false" aria-expanded="false" aria-haspopup="true" aria-label="Subtitles Menu"><div class="vjs-menu" role="presentation"><ul class="vjs-menu-content" role="menu"><li class="vjs-menu-item vjs-selected" tabindex="-1" role="menuitemcheckbox" aria-live="polite" aria-disabled="false" aria-checked="true">subtitles off<span class="vjs-control-text">, selected</span></li></ul></div><span class="vjs-control-text">Subtitles</span></div><div class="vjs-captions-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden" tabindex="0" role="menuitem" aria-live="polite" title="Captions" aria-disabled="false" aria-expanded="false" aria-haspopup="true" aria-label="Captions Menu"><div class="vjs-menu" role="presentation"><ul class="vjs-menu-content" role="menu"><li class="vjs-menu-item vjs-texttrack-settings" tabindex="-1" role="menuitem" aria-live="polite" aria-disabled="false">captions settings<span class="vjs-control-text">, opens captions settings dialog</span></li><li class="vjs-menu-item vjs-selected" tabindex="-1" role="menuitemcheckbox" aria-live="polite" aria-disabled="false" aria-checked="true">captions off<span class="vjs-control-text">, selected</span></li></ul></div><span class="vjs-control-text">Captions</span></div><div class="vjs-audio-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-hidden" tabindex="0" role="menuitem" aria-live="polite" title="Audio Track" aria-disabled="false" aria-expanded="false" aria-haspopup="true" aria-label="Audio Menu"><div class="vjs-menu" role="presentation"><ul class="vjs-menu-content" role="menu"></ul></div><span class="vjs-control-text">Audio Track</span></div><div class="vjs-menu-button vjs-menu-button-popup vjs-control vjs-button vjs-resolution-button" tabindex="0" role="menuitem" aria-live="polite" aria-disabled="false" aria-expanded="false" aria-haspopup="true" title="Quality"><div class="vjs-menu" role="presentation"><ul class="vjs-menu-content" role="menu"><li class="vjs-menu-item vjs-selected" tabindex="-1" role="menuitem" aria-live="polite" aria-disabled="false">HD<span class="vjs-control-text"></span></li><li class="vjs-menu-item" tabindex="-1" role="menuitem" aria-live="polite" aria-disabled="false">SD<span class="vjs-control-text"></span></li><li class="vjs-menu-item" tabindex="-1" role="menuitem" aria-live="polite" aria-disabled="false">MOBILE<span class="vjs-control-text"></span></li></ul></div><span class="vjs-control-text">Quality</span><span class="vjs-resolution-button-label">HD</span></div><button class="vjs-fullscreen-control vjs-control vjs-button" type="button" aria-live="polite" title="Fullscreen" aria-disabled="false"><span class="vjs-control-text">Fullscreen</span></button></div><div class="vjs-error-display vjs-modal-dialog" tabindex="-1" aria-describedby="vjs-video-current_component_399_description" aria-hidden="false" aria-label="Modal Window" role="dialog"><p class="vjs-modal-dialog-description vjs-offscreen" id="vjs-video-current_component_399_description">This is a modal window.</p><div class="vjs-modal-dialog-content" role="document">The media could not be loaded, either because the server or network failed or because the format is not supported.</div></div><div class="vjs-caption-settings vjs-modal-overlay vjs-hidden" tabindex="-1" role="dialog" aria-labelledby="TTsettingsDialogLabel-vjs-video-current_component_404" aria-describedby="TTsettingsDialogDescription-vjs-video-current_component_404"><div role="document"><div class="vjs-control-text" id="TTsettingsDialogLabel-vjs-video-current_component_404" aria-level="1" role="heading">Caption Settings Dialog</div><div class="vjs-control-text" id="TTsettingsDialogDescription-vjs-video-current_component_404">Beginning of dialog window. Escape will cancel and close the window.</div><div class="vjs-tracksettings"><div class="vjs-tracksettings-colors"><fieldset class="vjs-fg-color vjs-tracksetting"><legend>Text</legend><label class="vjs-label" for="captions-foreground-color-vjs-video-current_component_404">Color</label><select id="captions-foreground-color-vjs-video-current_component_404"><option value="#FFF">White</option><option value="#000">Black</option><option value="#F00">Red</option><option value="#0F0">Green</option><option value="#00F">Blue</option><option value="#FF0">Yellow</option><option value="#F0F">Magenta</option><option value="#0FF">Cyan</option></select><span class="vjs-text-opacity vjs-opacity"><label class="vjs-label" for="captions-foreground-opacity-vjs-video-current_component_404">Transparency</label><select id="captions-foreground-opacity-vjs-video-current_component_404"><option value="1">Opaque</option><option value="0.5">Semi-Transparent</option></select></span></fieldset><fieldset class="vjs-bg-color vjs-tracksetting"><legend>Background</legend><label class="vjs-label" for="captions-background-color-vjs-video-current_component_404">Color</label><select id="captions-background-color-vjs-video-current_component_404"><option value="#000">Black</option><option value="#FFF">White</option><option value="#F00">Red</option><option value="#0F0">Green</option><option value="#00F">Blue</option><option value="#FF0">Yellow</option><option value="#F0F">Magenta</option><option value="#0FF">Cyan</option></select><span class="vjs-bg-opacity vjs-opacity"><label class="vjs-label" for="captions-background-opacity-vjs-video-current_component_404">Transparency</label><select id="captions-background-opacity-vjs-video-current_component_404"><option value="1">Opaque</option><option value="0.5">Semi-Transparent</option><option value="0">Transparent</option></select></span></fieldset><fieldset class="vjs-window-color vjs-tracksetting"><legend>Window</legend><label class="vjs-label" for="captions-window-color-vjs-video-current_component_404">Color</label><select id="captions-window-color-vjs-video-current_component_404"><option value="#000">Black</option><option value="#FFF">White</option><option value="#F00">Red</option><option value="#0F0">Green</option><option value="#00F">Blue</option><option value="#FF0">Yellow</option><option value="#F0F">Magenta</option><option value="#0FF">Cyan</option></select><span class="vjs-window-opacity vjs-opacity"><label class="vjs-label" for="captions-window-opacity-vjs-video-current_component_404">Transparency</label><select id="captions-window-opacity-vjs-video-current_component_404"><option value="0">Transparent</option><option value="0.5">Semi-Transparent</option><option value="1">Opaque</option></select></span></fieldset></div><div class="vjs-tracksettings-font"><div class="vjs-font-percent vjs-tracksetting"><label class="vjs-label" for="captions-font-size-vjs-video-current_component_404">Font Size</label><select id="captions-font-size-vjs-video-current_component_404"><option value="0.50">50%</option><option value="0.75">75%</option><option value="1.00">100%</option><option value="1.25">125%</option><option value="1.50">150%</option><option value="1.75">175%</option><option value="2.00">200%</option><option value="3.00">300%</option><option value="4.00">400%</option></select></div><div class="vjs-edge-style vjs-tracksetting"><label class="vjs-label" for="vjs-video-current_component_404">Text Edge Style</label><select id="vjs-video-current_component_404"><option value="none">None</option><option value="raised">Raised</option><option value="depressed">Depressed</option><option value="uniform">Uniform</option><option value="dropshadow">Dropshadow</option></select></div><div class="vjs-font-family vjs-tracksetting"><label class="vjs-label" for="captions-font-family-vjs-video-current_component_404">Font Family</label><select id="captions-font-family-vjs-video-current_component_404"><option value="proportionalSansSerif">Proportional Sans-Serif</option><option value="monospaceSansSerif">Monospace Sans-Serif</option><option value="proportionalSerif">Proportional Serif</option><option value="monospaceSerif">Monospace Serif</option><option value="casual">Casual</option><option value="script">Script</option><option value="small-caps">Small Caps</option></select></div></div><div class="vjs-tracksettings-controls"><button class="vjs-default-button">Defaults</button><button class="vjs-done-button">Done</button></div></div></div></div></div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- ad :/ I GOTTA PAY THE BILLS THO -->
<div class="adspace">
    <div class="container">
        <div class="row">
            <script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
            <!-- SFH Article Page -->
            <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-4857751629906459" data-ad-slot="2306550718" data-ad-format="auto"></ins>
            <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
            </script>
            <div class="ad-explain">
                <p>^ Ad space to help offset hosting costs :D</p>
            </div>
        </div>
    </div>
</div><!-- article -->
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
<!-- next/previous -->
<section class="floater next-previous clearfix">
    <div class="floater-wrap" style="position: relative;">
        <div class="toc">
            <a href="https://serversforhackers.com/s/deployment" class="toc-icon"><img src="/img/icon-toc.svg"></a>
        </div>
        <div class="clearfix prev-next">
                    <div class="half half-left tleft">
                <div class="half-wrap">
                    <p class="half-label">Previous</p>
                    <p><a href="https://serversforhackers.com/c/enhancing-envoy-deployment" class="half-link">Enhancing Envoy Deployment</a></p>
                </div>
            </div>
                                    <div class="half half-left tright">
                <div class="half-wrap">
                    <p class="half-label">Current</p>
                    <p class="current-video">Automating Deployment from GitHub</p>
                </div>
            </div>
                </div>
    </div>
</section>
    </div>
    <div id="footer" class="dark">
        <div class="container">
            <div class="row">
                <div class="col-md-10 col-md-push-1 tcenter">
                    <p class="legal">© 2018 - Fideloper LLC</p>
                </div>
            </div>
        </div>
    </div>
    <div id="view-all-overlay" class="overlay light">
        <header>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h1 class="tleft">All Topics</h1>
                        <a href="#" class="tright close-overlay"><img src="/img/icon-x.svg" alt=""></a>
                    </div>
                </div>
            </div>
        </header>
        <section>
            <div class="container">
                <div class="row">
                                        <div class="col-md-4">
                        <h2><a href="https://serversforhackers.com/t/beginners">Beginners</a></h2>
                        <hr>
                        <ul>
                                                        <li><a href="https://serversforhackers.com/s/start-here">Start Here</a></li>
                                                        <li><a href="https://serversforhackers.com/s/ssh-usage-tips-and-tricks">SSH Usage, Tips, and Tricks</a></li>
                                                        <li><a href="https://serversforhackers.com/s/package-managers">Package Managers</a></li>
                                                                                    <li><a href="https://serversforhackers.com/c/nginx-multi-tenancy">Multi-Tenancy in Nginx</a></li>
                                                        <li><a href="https://serversforhackers.com/c/redirect-http-to-https-nginx">Redirect HTTP to HTTPS in Nginx</a></li>
                                                        <li><a href="https://serversforhackers.com/c/webservers-host-header">Web Servers and the Host Header</a></li>
                                                        <li class="view-more"><a href="https://serversforhackers.com/t/beginners">View more</a></li>
                        </ul>
                    </div>
                                                        <div class="col-md-4">
                        <h2><a href="https://serversforhackers.com/t/development">Development</a></h2>
                        <hr>
                        <ul>
                                                        <li><a href="https://serversforhackers.com/s/vagrant">Vagrant</a></li>
                                                                                    <li><a href="https://serversforhackers.com/c/beyond-permissions-linux-acls">Beyond Permissions: Linux ACLs</a></li>
                                                        <li><a href="https://serversforhackers.com/c/compiling-third-party-modules-into-nginx">Compiling Third-Party Modules Into Nginx</a></li>
                                                        <li><a href="https://serversforhackers.com/c/hosting-web-applications">Hosting Web Applications</a></li>
                                                        <li class="view-more"><a href="https://serversforhackers.com/t/development">View more</a></li>
                        </ul>
                    </div>
                                                        <div class="col-md-4">
                        <h2><a href="https://serversforhackers.com/t/containers">Containers</a></h2>
                        <hr>
                        <ul>
                                                        <li><a href="https://serversforhackers.com/s/docker-in-dev-v2-i">Docker in Development Part I</a></li>
                                                        <li><a href="https://serversforhackers.com/s/docker-in-dev-v2-ii">Docker in Development Part II</a></li>
                                                        <li><a href="https://serversforhackers.com/s/xdebug-in-docker">xDebug in Docker</a></li>
                                                                                    <li><a href="https://serversforhackers.com/c/what-is-docker">What is Docker</a></li>
                                                        <li><a href="https://serversforhackers.com/c/testing-in-containers">Testing in Containers</a></li>
                                                        <li><a href="https://serversforhackers.com/c/docker-any-php-version">Docker for any PHP Version</a></li>
                                                        <li class="view-more"><a href="https://serversforhackers.com/t/containers">View more</a></li>
                        </ul>
                    </div>
                                </div>
                <div class="row">
                                                        <div class="col-md-4">
                        <h2><a href="https://serversforhackers.com/t/php">PHP</a></h2>
                        <hr>
                        <ul>
                                                        <li><a href="https://serversforhackers.com/s/lemp-stack-php-71">LEMP Stack with PHP-7.1</a></li>
                                                        <li><a href="https://serversforhackers.com/s/managing-php-fpm">Managing PHP-FPM</a></li>
                                                        <li><a href="https://serversforhackers.com/s/lemp-all-the-things">LEMP All the Things</a></li>
                                                                                    <li><a href="https://serversforhackers.com/c/nginx-mapping-headers">Mapping Headers in Nginx</a></li>
                                                        <li><a href="https://serversforhackers.com/c/nginx-php-in-subdirectory">PHP Apps in a Subdirectory in Nginx</a></li>
                                                        <li><a href="https://serversforhackers.com/c/installing-php-7-with-memcached">Installing PHP-7 with Memcached</a></li>
                                                        <li class="view-more"><a href="https://serversforhackers.com/t/php">View more</a></li>
                        </ul>
                    </div>
                                                        <div class="col-md-4">
                        <h2><a href="https://serversforhackers.com/t/security">Security</a></h2>
                        <hr>
                        <ul>
                                                        <li><a href="https://serversforhackers.com/s/the-iptables-firewall">The Iptables Firewall</a></li>
                                                        <li><a href="https://serversforhackers.com/s/integrating-ssl-certificates">Integrating SSL Certificates</a></li>
                                                        <li><a href="https://serversforhackers.com/s/selinux">SELinux</a></li>
                                                                                    <li class="view-more"><a href="https://serversforhackers.com/t/security">View more</a></li>
                        </ul>
                    </div>
                                                        <div class="col-md-4">
                        <h2><a href="https://serversforhackers.com/t/proxies">Proxies</a></h2>
                        <hr>
                        <ul>
                                                        <li><a href="https://serversforhackers.com/s/load-balancing-with-nginx">Load Balancing with Nginx</a></li>
                                                                                    <li><a href="https://serversforhackers.com/c/letsencrypt-with-haproxy">LetsEncrypt with HAProxy</a></li>
                                                        <li><a href="https://serversforhackers.com/c/using-ssl-certificates-with-haproxy">Using SSL Certificates with HAProxy</a></li>
                                                        <li><a href="https://serversforhackers.com/c/cloudfront-and-your-app">CloudFront and Your App</a></li>
                                                        <li class="view-more"><a href="https://serversforhackers.com/t/proxies">View more</a></li>
                        </ul>
                    </div>
                                </div>
                <div class="row">
                                                        <div class="col-md-4">
                        <h2><a href="https://serversforhackers.com/t/continuous-integration">Continuous Integration</a></h2>
                        <hr>
                        <ul>
                                                        <li><a href="https://serversforhackers.com/s/jenkins-blue-ocean">Jenkins &amp; Blue Ocean</a></li>
                                                                                    <li class="view-more"><a href="https://serversforhackers.com/t/continuous-integration">View more</a></li>
                        </ul>
                    </div>
                                                        <div class="col-md-4">
                        <h2><a href="https://serversforhackers.com/t/configuration-management">Configuration Management</a></h2>
                        <hr>
                        <ul>
                                                        <li><a href="https://serversforhackers.com/s/ansible">Ansible</a></li>
                                                        <li><a href="https://serversforhackers.com/s/process-monitoring">Process Monitoring</a></li>
                                                        <li><a href="https://serversforhackers.com/s/http2">HTTP2</a></li>
                                                                                    <li><a href="https://serversforhackers.com/c/using-new-relics-free-server-monitoring">Using New Relic's Free Server Monitoring</a></li>
                                                        <li><a href="https://serversforhackers.com/c/an-ansible2-tutorial">An Ansible2 Tutorial</a></li>
                                                        <li><a href="https://serversforhackers.com/c/create-user-in-ansible">Creating a User in Ansible</a></li>
                                                        <li class="view-more"><a href="https://serversforhackers.com/t/configuration-management">View more</a></li>
                        </ul>
                    </div>
                                                        <div class="col-md-4">
                        <h2><a href="https://serversforhackers.com/t/databases">Databases</a></h2>
                        <hr>
                        <ul>
                                                        <li><a href="https://serversforhackers.com/s/up-and-running-with-mysql">Up and Running with MySQL</a></li>
                                                        <li><a href="https://serversforhackers.com/s/backup-and-recovery">Backup and Recovery</a></li>
                                                                                    <li><a href="https://serversforhackers.com/c/mysqldump-with-modern-mysql">Mysqldump with Modern MySQL</a></li>
                                                        <li><a href="https://serversforhackers.com/c/mysql-network-security">MySQL Network Security</a></li>
                                                        <li><a href="https://serversforhackers.com/c/amazon-rds">Amazon RDS</a></li>
                                                        <li class="view-more"><a href="https://serversforhackers.com/t/databases">View more</a></li>
                        </ul>
                    </div>
                                </div>
                <div class="row">
                                                    </div>
            </div>
        </section>
    </div>

    <!-- Scripts -->
    <script src="https://cdn.jsdelivr.net/algoliasearch/3/algoliasearch.min.js"></script>
    <script src="https://cdn.jsdelivr.net/autocomplete.js/0/autocomplete.min.js"></script>
    <script src="/js/app.js?id=da922aa2bd0a75c78fac"></script>
        <script type="text/javascript">
    var _dcq = _dcq || [];
    var _dcs = _dcs || {};
    _dcs.account = '7671096';

    (function() {
        var dc = document.createElement('script');
        dc.type = 'text/javascript'; dc.async = true;
        dc.src = '//tag.getdrip.com/7671096.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(dc, s);
    })();
</script>    <script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-20914866-3', 'auto');
    ga('send', 'pageview');
</script>

</body></html>

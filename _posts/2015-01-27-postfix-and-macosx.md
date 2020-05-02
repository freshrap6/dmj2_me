---
layout: post
title: ActionMailer issues
description: "I'm not completely crazy"
modified: 2015-01-30
category: articles
tags: [test]
image:
  feature: sample-image-5.jpg
  credit: WeGraphics
  creditlink: http://wegraphics.net/downloads/free-ultimate-blurred-background-pack/
---
Thought I was going crazy for a second there.  I'm adding emails to Rosterbuddy and I'm using [Mailcatcher](http://mailcatcher.me) to test/debug them.  I used Mailcatcher the first time I wrote the code, so I know how it works.  It's super easy to set up.

{% highlight bash %}
gem install mailcatcher
mailcatcher
{% endhighlight %}

After doing this I did the code to set up a mailer in my app, which is also straightforword.  Oddly enough, when I was trying to test it from the console I was seeing HUGE delays in the logs and Mailcatcher was not getting anything.  This was puzzling, because I know it worked for my old app.  After a few hours of trying out different Rails configurations I booted up my old app because I know it is configured correctly and worked.  Sadly no dice.  I was getting the same issues.  This lead me to believe the next possible option, somethings wrong with my dev environment.
<br />
<br />

After a few more hours of searching and searching, going through postfix and various config options, I came upon this [github issue](https://github.com/sj26/mailcatcher/issues/173).  Which finally confirmed for me there was a bug in Mailcatcher on Yosemite.  Luckily there is a simple enough work around.
<br />
<br />
Deep sigh of relief...

---
title: "This Site Was Revived From The Dead and Thanks to Cloudflare For That"
description: "As you might realized a couple of months ago, there were a few things that happened to this site, and I had absolutely no idea how it would spiralled out of control"
pubDate: "Dec 29 2025"
heroImage: "/nakal.webp"
---

# FUCK FUCK FUCK

As you might realized a couple of months ago, there were a few things that happened to this site, and I had absolutely no idea how it would spiralled out of control. I woke up that day around September to see that the site is generally slowing down and I rushed to see what’s going on. I did not really care that much, but for some reason a few days later the site just died without any reason. Troubleshooting the site would took me several months to figure out what was going on, while I was studying in my university. "

"I poked at my virtual machine to see what is going on under the tangled mess I jerry rigged to run the website. I ran a couple of test to make sure internet is available to the NGINX web server and to make sure the PHP is running the wordpress program properly. The tests would checks out any problem in the program itself, but there was none to found and ping is reporting back that the port 80 is open and accessible, indicating there wasn’t any suspicion in the machine. "

The graph above was taken by the traffic logger extension I use for WordPress and it shows a very worrying data, after I fixed the website. I use Cloudflare for everything because it has been proven to be very reliable compared to any other solution as I don’t way to pay for the hosting of this site. Then I read the error on the cloudflare page indicating the connector problem.

This error would put me into a several days of confusion as why it happened. It wouldn’t make any sense as this error would usually appear if the connector app to the server has crashed or disconnected, therefore cannot sending data to CF’s servers. Low and behold, my other sites are working well without any issues or slowdowns, including the stuff I use to manage and stream my library of movies.

I never have thought that the infamous ISP customer service saying of “Turn it off and on” or restarting the very thing is a solution to my problem. I tried changing port of my website VM to the CF homepage, restored a backup and lost some posts, and complained to my community, but not any single solution worked. I decided to just erase the public hostname list and just readd the hostname to the domain again. AND IT FUCKING WORKED FOR SOME REASON. Like, Jesus Christ, I didn’t hope it would be this easy, but the process of figuring it out is very trivial and random. There we go, the site is back on but it’s absolutely fucked as I lost a lot of posts.

"I ended up rewriting this shit though in late 2025"
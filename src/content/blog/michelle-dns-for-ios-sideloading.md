---
title: "Introducing Michelle DNS Suite for iOS Sideloading"
description: "Sideloading can a great way to obtain more functionality from a phone, albeit it needs a little bit of technique"
pubDate: "Mar 6 2026"
heroImage: "/apple.jpg"
---

## Signing iOS apps legally
It has been known that installing apps from outside the Apple's Appstore ecosystem is iffy but it might be circumvented. The current "official" supported method to install apps through Altstore and Sidestore requires the need to use containerisation to keep more than 3 apps installed at once. Not to forget that these solution will be broken each time an iOS update is performed. There is one method through DNS. 

## Bypassing iOS certificate checking mechanism
When iOS apps are installed through official Apple developer provisioned certificates, certain domains are contacted by iOS to do verification of apps as follows:

```
appattest.apple.com  
certs.apple.com  
crl.apple.com  
ocsp.apple.com  
ocsp2.apple.com  
valid.apple.com  
vpp.itunes.apple.com
```

(courtesy to Khoindvn.io Discord server and r/sideloaded)

These domains are used to verify the legitimacy of the certificates being used to sign these apps. This means that simply blocking them would allow the usage of leaked enterprise certificates that is not bound with ```PPQCheck``` and we will get back to that because it is important. With this mechanism bypassed, you can benefit on leaked enterprise certificates to install apps outside Appstore like this:
![blog placeholder](/signing.jpeg)

## PPQCheck
Late iOS 18 introduced a more aggressive ```PPQCheck``` which allows Apple to detect illegitimate apps installed to be blacklisted. This same mechanism is used to verify the AppID of the installed apps and if it finds the exact same one listed on Appstore's database, that certificate is lined up for blacklist by iOS. The idea is to block it and prevent the certificate to be blacklisted, however this approach is impossible because it is needed for apps to be run for the first time, so it is possible in a way.

If you allow the ```PPQCheck``` to run for first launch of sideloaded apps, then quickly blocking the service, then this method will work. Unlike certificate checking which was done by the seven domains listed that happens within the range of every second to every a few seconds, this checking happens less (around 48 hours according to a post from r/sideloading). However, this also means that using only one DNS server that block all the needed domains is impossible. The idea is to use a .mobileconfig that allows to switch between 7 domains+PPQ blocked and 7 domains blocked only.

## Introducing Michelle DNS Suite for Sideloading
![blog placeholder](/dns.jpeg)
[Download DNS profile here](https://cloud.kamikami.eu/s/michelleprofiles)

This profile allows user to choose between 3 DNS over TLS server that is hosted by me under Cloudflare. "Sideload Install Only" mode blocks the 7 domains listed to prevent certificates from being blacklisted instantly, while "Sideloaded KEEP" adds PPQ blocking to blacklists from PPQCheck. As a bonus, this DNS suite profile also performs ads and tracking filtering with filters provided by oisd.nl for break free experience and anti phishing from URLhaus. The workflow to install apps after installing the DNS profile then became:

1. Install Michelle DNS Suite .mobileconfig file and choose "Sideloaded INSTALL" then refresh DNS by turning on and off airplane mode.
2. Install KSign [KhoindVN](https://khoindvn.io.vn/) and install the certificate.
3. Install and sign your favorite apps using KSign and install them.
4. Once you have launched your apps for the first time, you put the DNS on "Sideloaded KEEP" mode to prevent PPQCheck from blacklisting the certificate.

There is some downside to this method tho:
* You should not update iOS as during update process, DNS profiles are not applied and therefore bypassed, blacklisting the certificates instantly.
* Avoid unnecessary restarting without enabling airplane mode (Yes, you are not allowed by Apple to apply iOS updates completely offline).
* Users accept the terms of service of Cloudflare Zero Trust terms of service and my anonymised logging policy on the all 3 of the DNS location. This does not track you in any identifiable way. No IP address logging and geolocation. DNS request are logged for diagnosing problems (sideloading and ad/tracker filtering)

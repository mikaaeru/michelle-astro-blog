---
title: "Introducing Michelle DNS Suite for iOS Sideloading"
description: "Sideloading can a great way to obtain more functionality from a phone, albeit it needs a little bit of technique"
pubDate: "Mar 1 2026"
heroImage: "/nakal.png"
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

# PPQCheck
Late iOS 18 introduced a more aggressive ```PPQCheck``` which allows Apple to detect illegitimate apps installed to be blacklisted. This same mechanism of ```PPQCheck``` is used to verify the AppID of the installed apps and if it finds the exact same one listed on Appstore's database, that certificate is lined up for blacklist by iOS. The idea is to block ```PPQCheck``` and prevent the certificate to be blacklisted, however this approach is impossible because ```PPQCheck``` is needed for apps to be run for the first time, so it is possible in a way.

If you allow the ```PPQCheck``` to run for first launch of sideloaded apps, then quickly blocking the service, then this method will work. Unlike certificate checking which was done by the seven domains listed that happens within the range of every second to every a few seconds, ```PPQCheck``` happens less
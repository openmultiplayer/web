---
title: Port Forwarding
sidebar_label: Port Forwarding
description: Server port forwarding tutorial.
---

**Welcome to the Port Forward tutorial!**

So, you have arrived to the Port Forward tutorial, made by Leopard.

All you need is a samp-server or omp-server and a router. If you have not a router, then you don't need to port forward!

## The Start

Ok, so here's the start, start off by finding your **gateway**. Assume that you have vista. Click start, click on the search field, and write **cmd**. Then a black box appears. Enter the following; **ipconfig**. Wait for the text to load, then look though it. Keep searching until you find _**gateway**_, and don't close the black box!

When you have found it, open your favorite web browser. When it's loaded, head over to the adress bar and type in the _**gateway**_ value (example: 192.168.0.1/192.168.1.1). Press enter.

## Router Configuration

Well done, you've made it to the router's configuration page. What we've got left to do is port forward now.

So.. there are a category in that page that is named one of the followings;

- Virtual Server
- Port Forwarding
- Port Control
- Application Sharing
- Anything with `port` in its name.

If you have found it, click on it. Then, click the 'Add new', 'New Port' or some else button that will toggle opening a new port.

Enter the following details:

```
Port: YOUR_PORT (standard: 7777)
Port Type: UDP
Enabled: Yes
**IP: Continue the 3rd Step**
```

Now you need to know your computer IP address.

## Getting the IP, Continuing

Now, maximize the black box and look though the text again, until you see _IPv4_. It should be in a format like this: **192.168.0.100**. Copy it, and there you have it! Continue with the Information in the router's homepage. For example, my ip is 192.168.0.100

```
Port: YOUR_PORT (standard: 7777)
Port Type: UDP
Enabled: Yes
IP: 192.168.0.100
```

And press **save**. Then your done. AND! Don't forget to **port forward in Windows Firewall**. This is a little tutorial;

Go to the start menu, enter "firewall" in the search field and select the "Windows Firewall". Open it and click _Change preferences_. New window pop-up. Click the _Exceptions_ tab, click the _Add port.._ and then fill in this information;

```
Name: SA-MP Server (name it whatever you want)
Port Number: YOUR_PORT (standard: 7777)
Protocol: UDP
```

Then your done! Click ok and close it. Launch the server, and see if its working. If it is, go to your SA-MP Client and enter: localhost:YOUR_PORT(standard: 7777). If the ping changes, then your server is working fully. Now you just need to go to:

[WhatIsMyIP.COM](https://www.whatismyip.com).

## The finish

Once there, get the ip that is on your screen. Go again to your SA-MP Client, add that ip to your favorites and add YOUR_PORT (standard: 7777) at the end. If its working,

**CONGRATULATIONS**! _You have port-forwarded_!

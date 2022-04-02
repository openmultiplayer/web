---
title: OnIncomingConnection
description: This callback is called when an IP address attempts a connection to the server.
tags: []
---

<VersionWarn name='callback' version='SA-MP 0.3z R2-2' />

## Description

Ang callback na ito ay itinatawag kapag mayroong IP address na nag-tatangkang kumonek sa server.

| Name         | Description                                        |
| ------------ | -------------------------------------------------- |
| playerid     | Ang ID ng player na nagtatangkang kumonek          |
| ip_address[] | Ang IP address ng player na nagtatangkang kumonek  |
| port         | Ang port ng tinangkang koneksyon                   |

## Returns

1 - Pipigilan ang ibang filterscripts na tanggapin itong callback.

0 - Ipinapahiwatig na ang callback na ito ay ipapasa sa ibang filterscript.

Ito ay palaging tinatawag una sa mga filterscripts.

## Mga Halimbawa

```c
public OnIncomingConnection(playerid, ip_address[], port)
{
    printf("Koneksyon mula sa %i [IP/port: %s:%i]", playerid, ip_address, port);
    return 1;
}
```

## Mga Kaugnay na Functions

- [BlockIpAddress](../functions/BlockIpAddress.md): I-Block ang isang IP address na kumonekta sa server sa ibinigay na oras.
- [UnBlockIpAddress](../functions/UnBlockIpAddress.md): I-unblock ang isang IP address na iblinock.

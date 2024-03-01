---
title: OnIncomingConnection
description: Acest callback este apelat atunci când o adresă IP încearcă să se conecteze la server.
tags: []
---

## Descriere

This callback is called when an IP address attempts a connection to the server. To block incoming connections, use BlockIpAddress.

| Name         | Description                                        |
| ------------ | -------------------------------------------------- |
| playerid     | The ID of the player attempting to connect         |
| ip_address[] | The IP address of the player attempting to connect |
| port         | The port of the attempted connection               |

## Returnări

1 - Va împiedica alte filterscript-uri să primească acest apel invers.

0 - Indică faptul că acest callback va fi transmis următorului filterscript.

Este întotdeauna numit primul în filterscript-uri.

## Exemple

```c
public OnIncomingConnection(playerid, ip_address[], port)
{
    printf("Incoming connection for player ID %i [IP/port: %s:%i]", playerid, ip_address, port);
    return 1;
}
```

## Funcții similare

- [BlockIpAddress](../functions/BlockIpAddress): Blocați conectarea unei adrese IP la server pentru o anumită perioadă de timp.
- [UnBlockIpAddress](../functions/UnBlockIpAddress): Deblocați un IP care a fost blocat anterior.
---
title: UnBlockIpAddress
sidebar_label: UnBlockIpAddress
description: Deblokirajte IP adresu koja je prethodno bila blokirana pomoću BlockIpAddress.
tags: []
---

## Deskripcija

Deblokirajte IP adresu koja je prethodno bila blokirana pomoću BlockIpAddress.

| Ime        | Deskripcija                |
| ---------- | -------------------------- |
| ip_address | IP addresa za deblokirati. |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
public OnGameModeInit()
{
    UnBlockIpAddress("127.0.0.1");
    return 1;
}
```

## Srodne Funkcije

- [BlockIpAddress](BlockIpAddress): Block an IP address from connecting to the server for a set amount of time.
- [OnIncomingConnection](../callbacks/OnIncomingConnection): Pozvano kada igrač pokušava da se konektuje na server.

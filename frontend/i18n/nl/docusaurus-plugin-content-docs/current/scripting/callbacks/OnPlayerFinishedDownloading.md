---
title: OnPlayerFinishedDownloading
sidebar_label: OnPlayerFinishedDownloading
description: Deze callback wordt aangeroepen wanneer een speler klaar is met het downloaden van aangepaste modellen.
tags: ["player"]
---

<VersionWarn name='callback' version='SA-MP 0.3.DL R1' />

## Beschrijving

Deze callback wordt aangeroepen wanneer een speler klaar is met het downloaden van aangepaste modellen. Voor meer informatie over het toevoegen van aangepaste modellen aan je server, zie de [release thread](https://sampforum.blast.hk/showthread.php?tid=644105) en [deze tutorial](https://sampforum.blast.hk/showthread.php?tid=644123).

| Naam         | Beschrijving                                                                    |
| ------------ | ------------------------------------------------------------------------------ |
| playerid     | Het ID van de speler die klaar was met het downloaden van aangepaste modellen. |
| virtualworld | Het ID van de virtual world waarvoor de speler klaar was met downloaden.       |

## Returns

Deze callback behandelt geen returns.

## Voorbeelden

```c
public OnPlayerFinishedDownloading(playerid, virtualworld)
{
    SendClientMessage(playerid, 0xFFFFFFFF, "Downloads finished.");
    return 1;
}
```

## Notities

:::tip

Deze callback wordt aangeroepen elke keer dat een speler van virtual world wisselt, zelfs als er geen aangepaste modellen aanwezig zijn in die wereld.

:::

## Gerelateerde Callbacks

- [OnPlayerConnect](OnPlayerConnect): Deze callback wordt aangeroepen wanneer een speler verbindt met de server.
- [OnPlayerDisconnect](OnPlayerDisconnect): Deze callback wordt aangeroepen wanneer een speler de server verlaat.
- [OnIncomingConnection](OnIncomingConnection): Deze callback wordt aangeroepen wanneer een speler probeert te verbinden met de server.

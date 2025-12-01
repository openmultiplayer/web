---
title: OnNPCConnect
sidebar_label: OnNPCConnect
description: Deze callback wordt aangeroepen wanneer een NPC succesvol met de server verbindt.
tags: ["npc"]
---

## Beschrijving

Deze callback wordt aangeroepen wanneer een NPC succesvol met de server verbindt.

| Naam       | Beschrijving                           |
| ---------- | ------------------------------------- |
| myplayerid | De playerid die aan de NPC is gegeven |

## Voorbeelden

```c
public OnNPCConnect(myplayerid)
{
    printf("I successfully connected the server with ID %i!", myplayerid);
}
```

## Gerelateerde Callbacks

- [OnNPCDisconnect](OnNPCDisconnect): Deze callback wordt aangeroepen wanneer de NPC de verbinding met de server verliest.
- [OnPlayerConnect](OnPlayerConnect): Deze callback wordt aangeroepen wanneer een speler met de server verbindt.
- [OnPlayerDisconnect](OnPlayerDisconnect): Deze callback wordt aangeroepen wanneer een speler de server verlaat.



---
title: OnNPCDisconnect
sidebar_label: OnNPCDisconnect
description: Deze callback wordt aangeroepen wanneer de NPC de verbinding met de server verliest.
tags: ["npc"]
---

## Beschrijving

Deze callback wordt aangeroepen wanneer de NPC de verbinding met de server verliest.

| Naam     | Beschrijving                                      |
| -------- | ------------------------------------------------ |
| reason[] | De reden waarom de bot de server verliet.        |

## Voorbeelden

```c
public OnNPCDisconnect(reason[])
{
    printf("Disconnected from the server. %s", reason);
}
```

## Gerelateerde Callbacks

- [OnNPCConnect](OnNPCConnect): Deze callback wordt aangeroepen wanneer de NPC succesvol met de server verbindt.
- [OnPlayerDisconnect](OnPlayerDisconnect): Deze callback wordt aangeroepen wanneer een speler de server verlaat.
- [OnPlayerConnect](OnPlayerConnect): Deze callback wordt aangeroepen wanneer een speler met de server verbindt.



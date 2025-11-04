---
title: OnScriptUnloadPlayer
sidebar_label: OnScriptUnloadPlayer
description: Deze callback wordt aangeroepen voor elke verbonden speler wanneer een script wordt uitgeladen.
tags: ["player"]
---

<VersionWarn name='callback' version='omp v1.3.1.2748' />

## Beschrijving

Deze callback wordt aangeroepen voor elke verbonden speler wanneer een script wordt uitgeladen.

| Naam               | Beschrijving                                                              |
| ------------------ | ------------------------------------------------------------------------ |
| playerid           | Het ID van de speler waarvoor het script wordt uitgeladen.              |
| bool:isEntryScript | Bepaalt of het een entry script (hoofdscript) of een side script is.    |

## Returns

Deze callback behandelt geen returns.

## Voorbeelden

```c
public OnScriptUnloadPlayer(playerid, bool:isEntryScript)
{
    printf("Script unloaded for player ID %d (isEntryScript: %s)", playerid, isEntryScript ? "Yes" : "No");
}
```

## Notities

:::tip

Deze callback wordt aangeroepen wanneer je een side script (filterscript) **uitlaadt** tijdens runtime.

:::

## Gerelateerde Callbacks

- [OnScriptLoadPlayer](OnScriptLoadPlayer): Deze callback wordt aangeroepen voor elke verbonden speler wanneer een script wordt geladen.
- [OnPlayerConnect](OnPlayerConnect): Deze callback wordt aangeroepen wanneer een speler met de server verbindt.
- [OnPlayerDisconnect](OnPlayerDisconnect): Deze callback wordt aangeroepen wanneer een speler de server verlaat.

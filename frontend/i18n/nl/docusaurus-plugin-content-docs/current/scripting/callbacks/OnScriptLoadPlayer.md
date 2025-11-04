---
title: OnScriptLoadPlayer
sidebar_label: OnScriptLoadPlayer
description: Deze callback wordt aangeroepen voor elke verbonden speler wanneer een script wordt geladen.
tags: ["player"]
---

<VersionWarn name='callback' version='omp v1.3.1.2748' />

## Beschrijving

Deze callback wordt aangeroepen voor elke verbonden speler wanneer een script wordt geladen.

| Naam               | Beschrijving                                                              |
| ------------------ | ------------------------------------------------------------------------ |
| playerid           | Het ID van de speler waarvoor het script wordt geladen.                 |
| bool:isEntryScript | Bepaalt of het een entry script (hoofdscript) of een side script is.    |

## Returns

Deze callback behandelt geen returns.

## Voorbeelden

```c
public OnScriptLoadPlayer(playerid, bool:isEntryScript)
{
    printf("Script loaded for player ID %d (isEntryScript: %s)", playerid, isEntryScript ? "Yes" : "No");
}
```

## Notities

:::tip

Deze callback wordt aangeroepen wanneer je een side script (filterscript) **laadt** tijdens runtime.

:::

## Gerelateerde Callbacks

- [OnScriptUnloadPlayer](OnScriptUnloadPlayer): Deze callback wordt aangeroepen voor elke verbonden speler wanneer een script wordt uitgeladen.
- [OnPlayerConnect](OnPlayerConnect): Deze callback wordt aangeroepen wanneer een speler met de server verbindt.
- [OnPlayerDisconnect](OnPlayerDisconnect): Deze callback wordt aangeroepen wanneer een speler de server verlaat.

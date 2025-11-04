---
title: GetPlayerSkin
sidebar_label: GetPlayerSkin
description: Haal de skin van een speler op.
tags: ["player"]
---

## Beschrijving

Geeft de skin‑ID van een speler terug.

| Naam | Beschrijving |
| ---- | ------------ |
| playerid | Speler waarvan je de skin wilt. |

## Retourneert

De skin‑ID, of 0 als ongeldig.

## Voorbeeld

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/myskin", true))
    {
        new s[32];
        new skin = GetPlayerSkin(playerid);
        format(s, sizeof(s), "Your skin id: %d", skin);
        SendClientMessage(playerid, -1, s);
        return 1;
    }
    return 0;
}
```

## Opmerkingen

Geeft de nieuwe skin terug nadat [SetSpawnInfo](SetSpawnInfo) is aangeroepen, maar vóór de speler daadwerkelijk respawnt. Als de speler via [SpawnPlayer](SpawnPlayer) is gespawned, wordt de oude skin teruggegeven.

## Gerelateerd

- [SetPlayerSkin](SetPlayerSkin)
- [Skin IDs](../resources/skins)



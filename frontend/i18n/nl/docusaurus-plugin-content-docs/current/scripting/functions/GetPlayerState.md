---
title: GetPlayerState
sidebar_label: GetPlayerState
description: Haal de huidige staat van een speler op.
tags: ["player"]
---

## Beschrijving

Haal de huidige staat van een speler op.

| Naam | Beschrijving |
| ---- | ------------ |
| playerid | ID van de speler. |

## Retourneert

De huidige staat als integer (zie: [Player States](../resources/playerstates)).

## Voorbeeld

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    new PLAYER_STATE:state = GetPlayerState(killerid);
    if (state == PLAYER_STATE_DRIVER)
    {
        GivePlayerMoney(killerid, -10000);
    }
    return 1;
}
```

## Gerelateerd

- [GetPlayerSpecialAction](GetPlayerSpecialAction)
- [SetPlayerSpecialAction](SetPlayerSpecialAction)
- [OnPlayerStateChange](../callbacks/OnPlayerStateChange)



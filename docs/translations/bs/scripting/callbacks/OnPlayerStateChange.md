---
title: OnPlayerStateChange
description: Ovaj callback je pozvan kada igrač promijeni stanje.
tags: ["player"]
---

## Deskripcija

Ovaj callback je pozvan kada igrač promijeni stanje. Naprimjer, kada igrač promijeni stanje votača vozila u stanje da bude na nogama (on-foot) (napustio vozilo).

| Ime      | Deskripcija                          |
| -------- | ------------------------------------ |
| playerid | ID igrača koji je promijenio stanje. |
| newstate | Igračevo novo stanje.                |
| oldstate | Igračevo prethodno stanje.           |

Pogledajte [Igračeva stanja/Player States](../resources/playerstates.md) za listu svih dostupnih stanja igrača.

## Returns

Uvijek je pozvan prvo u filterskripti.

## Primjeri

```c
public OnPlayerStateChange(playerid, PLAYER_STATE:newstate, PLAYER_STATE:oldstate)
{
    if (oldstate == PLAYER_STATE_ONFOOT && newstate == PLAYER_STATE_DRIVER) // Igrač ušao u vozilo kao vozač
    {
        new vehicleid = GetPlayerVehicleID(playerid);
        AddVehicleComponent(vehicleid, 1010); // Dodaje nitro na vozilo
    }
    return 1;
}
```

## Zabilješke

:::tip

Ovaj callback pozvat će i NPC.

:::

## Srodne Funkcije

- [GetPlayerState](../functions/GetPlayerState.md): Dobij trenutno igračevo stanje.
- [GetPlayerSpecialAction](../functions/GetPlayerSpecialAction.md): Dobij trenutnu igračevu specijalnu akciju (special action).
- [SetPlayerSpecialAction](../functions/SetPlayerSpecialAction.md): Postavi igraču specijalnu akciju (special action).

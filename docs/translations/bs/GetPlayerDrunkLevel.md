---
title: GetPlayerDrunkLevel
description: Provjerava nivo igračevog pijanstva.
tags: ["player"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3a i ne radi u nižim verzijama!

:::

## Deskripcija

Provjerava nivo igračevog pijanstva. Ako je nivo manji od 2000, igrač je trijezan. Razina pijanstva igrača automatski polako opada (26 nivoa u sekundi), ali će na kraju uvijek doseći 2000 (u 0.3b će se zaustaviti na nuli). Viši nivo pijanstva utječe na igračevu kameru i upravljanje vozilom. Razina pijanstva raste kada igrač pije iz boce (možete im koristiti SetPlayerSpecialAction da biste im dali boce).

| Ime      | Deskripcija                                   |
| -------- | --------------------------------------------- |
| playerid | Igrač kojem želite provjeriti nivo pijanstva. |

## Returns

Cijeli broj sa nivoom igračevog pijanstva.

## Primjeri

```c
public OnPlayerStateChange(playerid, oldstate, newstate)
{
    if (newstate == PLAYER_STATE_DRIVER && GetPlayerDrunkLevel(playerid) > 1999)
    {
        SendClientMessage(playerid,0xFFFFFFFF,"Nemoj da piješ i voziš!");
        RemovePlayerFromVehicle(playerid);
    }
}
```

## Srodne Funkcije

- [SetPlayerDrunkLevel](SetPlayerDrunkLevel): Postavi igraču nivo pijanstva.

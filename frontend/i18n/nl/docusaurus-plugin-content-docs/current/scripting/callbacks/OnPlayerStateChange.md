---
title: OnPlayerStateChange
sidebar_label: OnPlayerStateChange
description: Deze callback wordt aangeroepen wanneer een speler van staat verandert.
tags: ["player"]
---

## Beschrijving

Deze callback wordt aangeroepen wanneer een speler van staat verandert. Bijvoorbeeld, wanneer een speler verandert van bestuurder van een voertuig naar lopend.

| Naam                  | Beschrijving                              |
| --------------------- | ---------------------------------------- |
| playerid              | Het ID van de speler die van staat veranderde. |
| PLAYER_STATE:newstate | De nieuwe staat van de speler.           |
| PLAYER_STATE:oldstate | De vorige staat van de speler.           |

Zie [Player States](../resources/playerstates) voor een lijst van alle beschikbare spelerstaten.

## Returns

Wordt altijd als eerste aangeroepen in filterscripts.

## Voorbeelden

```c
public OnPlayerStateChange(playerid, PLAYER_STATE:newstate, PLAYER_STATE:oldstate)
{
    if (oldstate == PLAYER_STATE_ONFOOT && newstate == PLAYER_STATE_DRIVER) // Speler ging een voertuig in als bestuurder
    {
        new vehicleid = GetPlayerVehicleID(playerid);
        AddVehicleComponent(vehicleid, 1010); // Voeg NOS toe aan het voertuig
    }
    return 1;
}
```

## Notities

<TipNPCCallbacks />

## Gerelateerde Callbacks

De volgende callbacks kunnen nuttig zijn, omdat ze gerelateerd zijn aan deze callback.

- [OnPlayerInteriorChange](OnPlayerInteriorChange): Deze callback wordt aangeroepen wanneer een speler van interior verandert.

## Gerelateerde Functies

De volgende functies kunnen nuttig zijn, omdat ze gerelateerd zijn aan deze callback.

- [GetPlayerState](../functions/GetPlayerState): Krijg de huidige staat van een speler.
- [GetPlayerSpecialAction](../functions/GetPlayerSpecialAction): Krijg de huidige speciale actie van een speler.
- [SetPlayerSpecialAction](../functions/SetPlayerSpecialAction): Stel de speciale actie van een speler in.

## Gerelateerde Resources

- [Player States](../resources/playerstates)

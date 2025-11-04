---
title: OnPlayerSpawn
sidebar_label: OnPlayerSpawn
description: Deze callback wordt aangeroepen wanneer een speler spawnt.
tags: ["player"]
---

## Beschrijving

Deze callback wordt aangeroepen wanneer een speler spawnt. (d.w.z. na het aanroepen van de [SpawnPlayer](../functions/SpawnPlayer) functie)

| Naam     | Beschrijving                                  |
| -------- | --------------------------------------------- |
| playerid | Het ID van de speler die gespawnd is.         |

## Returns

0 - Voorkomt dat andere filterscripts deze callback ontvangen.

1 - Geeft aan dat deze callback wordt doorgegeven aan het volgende filterscript.

Wordt altijd als eerste aangeroepen in filterscripts.

## Voorbeelden

```c
public OnPlayerSpawn(playerid)
{
    new PlayerName[MAX_PLAYER_NAME];
    GetPlayerName(playerid, PlayerName, sizeof(PlayerName));

    new string[64];
    format(string, sizeof(string), "%s has spawned successfully.", PlayerName);

    SendClientMessageToAll(0xFFFFFFFF, string);
    return 1;
}
```

## Notities

:::tip

Wanneer een speler sterft in San Andreas krijgen ze automatisch $100 afgetrokken voor ziekenhuiskosten. Deze functie blijft in SA:MP, maar is verwijderd uit open.mp om scripts hun eigen geld te laten beheren. Verschillende scripts proberen dit al te repareren door $100 toe te voegen aan een speler na de dood, of bij spawn. Als dit jouw script is, verwijder dan de extra fix, hoewel de code in open.mp probeert rekening te houden met scripts die dit doen. Als jouw script afhankelijk was van deze functie, voeg dan de volgende code toe aan [OnPlayerDeath](OnPlayerDeath):

```c
GivePlayerMoney(playerid, -100);
```

:::

## Gerelateerde Callbacks

De volgende callbacks kunnen nuttig zijn, omdat ze gerelateerd zijn aan deze callback.

- [OnPlayerDeath](OnPlayerDeath): Deze callback wordt aangeroepen wanneer een speler sterft.
- [OnVehicleSpawn](OnVehicleSpawn): Deze callback wordt aangeroepen wanneer een voertuig respawnt.

## Gerelateerde Functies

De volgende functies kunnen nuttig zijn, omdat ze gerelateerd zijn aan deze callback.

- [SpawnPlayer](../functions/SpawnPlayer): Forceer een speler om te spawnen.
- [AddPlayerClass](../functions/AddPlayerClass): Voeg een klasse toe.
- [SetSpawnInfo](../functions/SetSpawnInfo): Stel de spawn-instellingen in voor een speler.

---
title: OnPlayerDeath
sidebar_label: OnPlayerDeath
description: Deze callback wordt aangeroepen wanneer een speler sterft, door zelfmoord of door gedood te worden door een andere speler.
tags: ["player"]
---

## Beschrijving

Deze callback wordt aangeroepen wanneer een speler sterft, door zelfmoord of door gedood te worden door een andere speler.

| Naam          | Beschrijving                                                                                   |
| ------------- | --------------------------------------------------------------------------------------------- |
| playerid      | Het ID van de speler die gestorven is.                                                       |
| killerid      | Het ID van de speler die de speler heeft gedood, of INVALID_PLAYER_ID als er geen was.        |
| WEAPON:reason | Het ID van de reden ([weapon id](../resources/weaponids)) voor de dood van de speler.         |

## Returns

0 - Voorkomt dat andere filterscripts deze callback ontvangen.

1 - Geeft aan dat deze callback wordt doorgegeven aan het volgende filterscript.

Wordt altijd als eerste aangeroepen in filterscripts.

## Voorbeelden

```c
new PlayerDeaths[MAX_PLAYERS];
new PlayerKills[MAX_PLAYERS];

public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    SendDeathMessage(killerid, playerid, reason); // Toont de kill in de killfeed

    // Controleer dat killerid geldig is voordat je er iets mee doet
    if (killerid != INVALID_PLAYER_ID)
    {
        PlayerKills[killerid] ++;
    }

    // Buiten de check, behandel dingen voor playerid (het is altijd geldig)
    PlayerDeaths[playerid] ++;
    return 1;
}
```

## Notities

:::tip

De reason zal 37 (flame thrower) teruggeven van elke vuurbron (bijv. molotov, 18) De reason zal 51 teruggeven van elk wapen dat een explosie veroorzaakt (bijv. RPG, granaat) Je hoeft niet te controleren of killerid geldig is voordat je het gebruikt in [SendDeathMessage](../functions/SendDeathMessage). INVALID_PLAYER_ID is een geldige killerid parameter in die functie. playerid is de enige die de callback kan aanroepen. (goed om te weten voor anti fake death)

:::

:::warning

Je MOET controleren of 'killerid' geldig is (niet INVALID_PLAYER_ID) voordat je het gebruikt in een array (of echt overal), omdat het ervoor zorgt dat het OnPlayerDeath script crasht (niet het hele script). Dit komt omdat INVALID_PLAYER_ID gedefinieerd is als 65535, en als een array alleen 'MAX_PLAYERS' elementen heeft, bijv. 500, probeer je een index te benaderen die boven 499 ligt, wat buiten de grenzen is.

:::

## Gerelateerde Callbacks

De volgende callbacks kunnen nuttig zijn, omdat ze gerelateerd zijn aan deze callback.

- [OnPlayerSpawn](OnPlayerSpawn): Deze callback wordt aangeroepen wanneer een speler spawnt.

## Gerelateerde Functies

De volgende functies kunnen nuttig zijn, omdat ze gerelateerd zijn aan deze callback.

- [SendDeathMessage](../functions/SendDeathMessage): Voeg een kill toe aan de death list.
- [SetPlayerHealth](../functions/SetPlayerHealth): Stel de health van een speler in.

## Gerelateerde Resources

- [Weapon IDs](../resources/weaponids)

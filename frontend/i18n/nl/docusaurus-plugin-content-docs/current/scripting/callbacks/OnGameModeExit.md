---
title: OnGameModeExit
sidebar_label: OnGameModeExit
description: Deze callback wordt aangeroepen wanneer een gamemode eindigt via 'gmx', server shutdown, of GameModeExit.
tags: []
---

## Beschrijving

Deze callback wordt aangeroepen wanneer een gamemode eindigt, via 'gmx', server shutdown, of GameModeExit.

## Voorbeelden

```c
public OnGameModeExit()
{
    print("Gamemode ended.");
    return 1;
}
```

## Notities

:::tip

Deze functie kan ook gebruikt worden in een filterscript om te detecteren of de gamemode verandert met RCON commands zoals changemode of gmx, omdat het veranderen van de gamemode een filterscript niet herlaadt.

:::

:::warning

Bij gebruik van OnGameModeExit in combinatie met het 'rcon gmx' console command, houd er rekening mee dat er een potentieel is voor client bugs.

Een voorbeeld hiervan is overmatige [RemoveBuildingForPlayer](RemoveBuildingForPlayer) calls tijdens [OnGameModeInit](OnGameModeInit) wat kan resulteren in een client crash. Deze callback wordt NIET aangeroepen als de server crasht of het proces wordt beëindigd door andere middelen, zoals het Linux kill command of het drukken van de sluit-knop op de Windows console.

:::

## Gerelateerde Callbacks

De volgende callbacks kunnen nuttig zijn, omdat ze gerelateerd zijn aan deze callback.

- [OnGameModeInit](OnGameModeInit): Deze callback wordt aangeroepen wanneer een gamemode start.
- [OnFilterScriptInit](OnFilterScriptInit): Deze callback wordt aangeroepen wanneer een filterscript wordt geladen.
- [OnFilterSciptExit](OnFilterScriptExit): Deze callback wordt aangeroepen wanneer een filterscript wordt uitgezet.

## Gerelateerde Functies

De volgende functies kunnen nuttig zijn, omdat ze gerelateerd zijn aan deze callback.

- [GameModeExit](../functions/GameModeExit): Verlaat de huidige gamemode.

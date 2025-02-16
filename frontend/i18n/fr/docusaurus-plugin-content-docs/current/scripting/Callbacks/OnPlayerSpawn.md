---
title: OnPlayerSpawn
sidebar_label: OnPlayerSpawn
description: Cette callback est appelée lorsqu'un joueur spawn (apparaît).
tags: ["player"]
---

## Paramètres

Cette callback est appelée lorsqu'un joueur spawn (apparaît).

| Nom            | Description                        |
| -------------- | ---------------------------------- |
| `int` playerid | L'ID du joueur qui spawn.          |

## Valeur de retour

Retournez **0** pour forcer le joueur à retourner à la sélection de classe au prochain spawn.

## Exemple

```c
public OnPlayerSpawn(playerid)
{
    new PlayerName[MAX_PLAYER_NAME],
        string[40];
        
    GetPlayerName(playerid, PlayerName, sizeof(PlayerName
    
    format(string, sizeof(string), "[ ! ] %s a spawn.", PlayerName);
    SendClientMessageToAll(0xFFFFFFFF, string);
    
    return 1;
}
```

## Astuces

:::tip

Le jeu déduit parfois \$100 à un joueur après son apparition.

:::

## Fonctions connexes

- [SpawnPlayer](../functions/SpawnPlayer): Force un joueur a spawn.
- [AddPlayerClass](../functions/AddPlayerClass): Ajoute une class.
- [SetSpawnInfo](../functions/SetSpawnInfo): Permet de déterminer les paramètres de spawn d'un joueur.

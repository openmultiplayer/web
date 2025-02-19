---
title: OnPlayerRequestSpawn
sidebar_label: OnPlayerRequestSpawn
description: Appelée lorsqu'un joueur clique sur le bouton "spawn" lors de la sélection de classe.
tags: ["player"]
---

## Paramètres

Appelée lorsqu'un joueur clique sur le bouton "spawn" lors de la sélection de classe.

| Nom            | Description                       |
| -------------- | --------------------------------- |
| `int` playerid | ID du joueur qui demande le spawn |

## Valeur de retour

Retourner **0** dans cette callback empêchera le joueur d'apparaître.

## Exemple

```c
public OnPlayerRequestSpawn(playerid)
{
    if (!IsPlayerAdmin(playerid))
    {
        SendClientMessage(playerid, -1, "Vous ne pouvez pas spawn.");
        return 0;
    }
    return 1;
}
```

## Astuces

<TipNPCCallbacks />

:::tip

Pour éviter que les joueurs spawn avec une certaine classe, la classe dernièrement vue doit être sauvegardée dans une variable dans OnPlayerRequestClass.

:::

## Fonctions connexes

---
title: OnPlayerRequestClass
sidebar_label: OnPlayerRequestClass
description: Appelée lorsqu'un joueur change de classe dans la sélection de classe.
tags: ["player"]
---

## Paramètres

Appelée lorsqu'un joueur change de classe dans la sélection de classe.

| Nom            | Description                                                                                                 |
| -------------- | ----------------------------------------------------------------------------------------------------------- |
| `int` playerid | L'ID du joueur qui change de classe                                                                         |
| `int` classid  | La classe que visionne actuellement le joueur (retournée par [AddPlayerClass](../functions/AddPlayerClass). |

## Valeur de retour

Retourner **0** va empêcher le joueur de changer de classe.

## Exemple

```c
public OnPlayerRequestClass(playerid,classid)
{
    if (classid == 3 && !IsPlayerAdmin(playerid))
    {
        SendClientMessage(playerid, COLOR_RED, "Ce  skin est seulement pour les admins !");
        return 0;
    }
    return 1;
}
```

## Astuces

:::tip

Cette callback est aussi appelée quand un joueur presse F4.

:::

## Fonctions connexes

- [AddPlayerClass](../functions/AddPlayerClass): Ajoute une classe.

---
title: OnPlayerSelectObject
sidebar_label: OnPlayerSelectObject
description: Cette callback est appelée quand un joueur sélectionne un objet après que SelectObject a été utilisé.
tags: ["player"]
---

## Description

Cette callback est appelée quand un joueur sélectionne un objet après que SelectObject a été utilisé.

| Nom              | Description                                          |
| ---------------- | ---------------------------------------------------- |
| `int` playerid   | ID du joueur qui sélectionne l'objet                 |
| `int` type       | [Type](../resources/selectobjecttypes) de sélection  |
| `int` objectid   | ID de l'objet sélectionné                            |
| `int` modelid    | Model de l'objet sélectionné                         |
| `float` Float:fX | Position X de l'objet sélectionné                    |
| `float` Float:fY | Position Y de l'objet sélectionné                    |
| `float` Float:fZ | Position Z de l'objet sélectionné                    |

## Valeur de retour

**1** - Autorise la callback à être appelée par un autre script.

**0** - Refuser que la callback soit appelée ailleurs.

## Exemple

```c
public OnPlayerSelectObject(playerid, type, objectid, modelid, Float:fX, Float:fY, Float:fZ)
{
    printf("Joueur %d sélectionne l'objet %d", playerid, objectid);
    if (type == SELECT_OBJECT_GLOBAL_OBJECT)
    {
        EditObject(playerid, objectid);
    }
    else
    {
        EditPlayerObject(playerid, objectid);
    }
    SendClientMessage(playerid, 0xFFFFFFFF, "Vous pouvez maintenant éditer la position de l'objet !");
    return 1;
}
```

## Fonctions connexes

- [SelectObject](../functions/SelectObject): Sélectionne un objet.

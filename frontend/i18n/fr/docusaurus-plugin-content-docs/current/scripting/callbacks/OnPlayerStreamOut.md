---
title: OnPlayerStreamOut
sidebar_label: OnPlayerStreamOut
description: Cette fonction est appelée quand un joueur est déchargé (n'est plus visible) pour un joueur.
tags: ["player"]
---

## Paramètres

Cette fonction est appelée quand un joueur est déchargé (n'est plus visible) pour un joueur.

| Nom               | Description                             |
| ----------------- | --------------------------------------- |
| `int` playerid    | L'ID de joueur déchargé par le joueur   |
| `int` forplayerid | L'ID du joueur qui a déchargé le joueur |

## Valeur de retour

Cette callback ne retourne rien, mais doit retourner quelque chose. Autrement dit, `return callback();` ne fonctionnera pas car la callback ne retourne rien, mais un return _(`return 1;` ou `return 0;`)_ doit être effectué dans la callback.

## Exemple

```c
public OnPlayerStreamOut(playerid, forplayerid)
{
    new 
        string[80];
    
    format(string, sizeof(string), "Le joueur ID %d vient d'être déchargé de votre client.", playerid);
    SendClientMessage(forplayerid, 0xFF0000FF, string);
    
    return 1;
}
```

## Astuces

<TipNPCCallbacks />

## Fonctions connexes

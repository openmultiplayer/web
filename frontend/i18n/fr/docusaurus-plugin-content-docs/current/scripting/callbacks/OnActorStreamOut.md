---
title: OnActorStreamOut
sidebar_label: OnActorStreamOut
description: Cette fonction est appelée quand un actor est déchargé (n'est plus visible) pour un joueur.
tags: [actors, actorstream, forplayerid, actorid]
---

<VersionWarn name='callback' version='SA-MP 0.3.7' />

## Description

Cette fonction est appelée quand un actor est déchargé _(n'est plus visible)_ pour un joueur.

| Nom               | Description                                  |
| -----------       | -------------------------------------------- |
| `int` actorid     | ID de l'actor déchargé par le joueur         |
| `int` forplayerid | ID du joueur a déchargé l'actor (`actorid`)  |

## Valeur de retour

Cette callback ne retourne rien, mais doit retourner quelque chose. Autrement dit, `return callback();` ne fonctionnera pas car la callback ne retourne rien, mais un return _(`return 1;` ou `return 0;`)_ doit être effectué dans la callback.

## Exemple

```c
public OnActorStreamOut(actorid, forplayerid)
{
    new string[40];
    format(string, sizeof(string), "L'acteur %d n'est plus stream par vous.", actorid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Astuces

<TipNPCCallbacks />

## Fonctions connexes

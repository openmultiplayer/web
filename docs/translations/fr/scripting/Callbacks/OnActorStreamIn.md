---
title: OnActorStreamIn
description: Cette callback est appelée lorsqu'un acteur est stream un joueur.
tags: [actors, actorstream, forplayerid, actorid]
---

<VersionWarn name='callback' version='SA-MP 0.3.7' />

## Paramètres

Cette callback est appelée quand un acteur est stream par joueur.

| Nom               | Description                                                   |
| -----------       | ------------------------------------------------------------- |
| `int` actorid     | ID de l'actor qui va être stream par le joueur                |
| `int` forplayerid | ID du joueur qui stream l'actor (`actorid`)                   |

## Return

La callback est toujours appelé en premier dans les filterscripts.

## Exemple

```c
public OnActorStreamIn(actorid, forplayerid)
{
    new string[40];
    format(string, sizeof(string), "L'acteur %d est maintenant stream par vous.", actorid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Astuces

<TipNPCCallbacks />

## Fonctions connexes

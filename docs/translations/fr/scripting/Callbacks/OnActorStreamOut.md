---
title: OnActorStreamOut
description: Cette callback est appelée quand un actor n'est plus stream par un joueur.
tags: [actors, actorstream, forplayerid, actorid]
---

<VersionWarn name='callback' version='SA-MP 0.3.7' />

## Description

Cette callback est appelée quand un actor n'est plus stream par un joueur.

| Nom               | Description                                                   |
| -----------       | ------------------------------------------------------------- |
| `int` actorid     | ID de l'actor qui n'est plus stream par le joueur             |
| `int` forplayerid | ID du joueur qui ne stream plus l'actor (`actorid`)           |


## Emplacement

La callback est toujours appelée en premier dans les filterscripts.

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

---
title: OnActorStreamIn
sidebar_label: OnActorStreamIn
description: Cette fonction est appelée quand un actor est chargé (devient visible) pour un joueur.
tags: [actors, actorstream, forplayerid, actorid]
---

<VersionWarn name='callback' version='SA-MP 0.3.7' />

## Paramètres

Cette fonction est appelée quand un actor est chargé _(devient visible)_ pour un joueur.

| Nom               | Description                                 |
| -----------       | ------------------------------------------- |
| `int` actorid     | ID de l'actor chargé par le joueur          |
| `int` forplayerid | ID du joueur qui charge l'actor (`actorid`) |

## Valeur de retour

Cette callback ne retourne rien, mais doit retourner quelque chose. Autrement dit, `return callback();` ne fonctionnera pas car la callback ne retourne rien, mais un return _(`return 1;` ou `return 0;`)_ doit être effectué dans la callback.

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

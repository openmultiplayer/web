---
title: OnPlayerClickPlayer
description: Callback appelée quand un joueur double-clique sur le pseudo d'un joueur dans la tablist.
tags: [player, clickplayer, clickedplayerid, source]
---

<VersionWarn name='callback' version='SA-MP 0.3a' />

## Paramètres

Callback appelée quand un joueur double-clique sur le pseudo d'un joueur dans la tablist.

| Nom                   | Description                                                      |
| --------------------- | ---------------------------------------------------------------- |
| `int` playerid        | ID du joueur qui double-clique sur un pseudo dans la tablist     |
| `int` clickedplayerid | ID du joueur sélectionn                                          |
| `int` source          | Source du clic du joueur                                         |

## Valeur de retour

**1** - Empêche les autres filterscripts de recevoir cette callback

**0** - Indique que cette callback doit passer au filterscript suivant.

## Exemple

```c
public OnPlayerClickPlayer(playerid, clickedplayerid, source)
{
    new message[32];
    format(message, sizeof(message), "Vous avez sélectionné le joueur %d", clickedplayerid);
    SendClientMessage(playerid, 0xFFFFFFFF, message);
    return 1;
}
```

## Notes

:::tip

Il n'y a qu'une seule 'source' de clic (0 - CLICK_SOURCE_SCOREBOARD).

:::

## Related Functions

- [OnPlayerClickTextDraw](OnPlayerClickTextDraw): Quand un joueur clique sur un textdraw.
- [OnPlayerClickMap](OnPlayerClickMap): Quand un joueur place un point sur la map avec le clic droit.

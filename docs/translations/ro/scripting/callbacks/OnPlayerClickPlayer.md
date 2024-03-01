---
title: OnPlayerClickPlayer
description: Apelat atunci când un jucător dă dublu clic pe un jucător de pe scoreboard.
tags: ["player"]
---

## Descriere

Apelat atunci când un jucător dă dublu clic pe un jucător de pe scoreboard.

| Nume            | Descriere                                                        |
| --------------- | ---------------------------------------------------------------- |
| playerid        | ID-ul jucătorului care a apăsat pe un jucător de pe scoreboard.  |
| clickedplayerid | ID-ul jucătorului pe care a apăsat      .                        |
| source          | [source](../resources/clicksources) clicului jucătorului.        |

## Returnări

1 - Va împiedica alte filterscript-uri să primească acest callback.

0 - Indică faptul că acest callback va fi transmis următorului filterscript.

Este întotdeauna numit primul în filterscript.

## Exemple

```c
public OnPlayerClickPlayer(playerid, clickedplayerid, source)
{
    new message[32];
    format(message, sizeof(message), "Ai apăsat pe jucătorul  %d", clickedplayerid);
    SendClientMessage(playerid, 0xFFFFFFFF, message);
    return 1;
}
```

## Note

:::tip

În prezent, există o singură „sursă” (0 - CLICK_SOURCE_SCOREBOARD). Existența acestui argument sugerează că mai multe surse pot fi susținute în viitor.

:::

## Funcții similare

- [OnPlayerClickTextDraw](OnPlayerClickTextDraw): Apelat atunci când un jucător dă clic pe un textdraw.
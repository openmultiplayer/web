---
title: OnPlayerClickPlayer
sidebar_label: OnPlayerClickPlayer
description: Poziva se kada igrač dva puta klikne na igrača na scoreboard-u (TAB).
tags: ["player"]
---

## Deskripcija

Poziva se kada igrač dva puta klikne na igrača na scoreboard-u (TAB).

| Ime             | Deskripcija                                          |
| --------------- | ---------------------------------------------------- |
| playerid        | ID igrača koji je kliknuo na igrača na scoreboard-u. |
| clickedplayerid | ID igrača koji je kliknut.                           |
| source          | Izvor igračevog klika.                               |

## Returns

1 - Spriječiti će da druge filterskripte primaju ovaj callback.

0 - Označava da će ovaj callback biti proslijeđen do sljedeće filterskripte.

Uvijek je pozvana prva u filterskripti.

## Primjeri

```c
public OnPlayerClickPlayer(playerid, clickedplayerid, CLICK_SOURCE:source)
{
    new message[32];
    format(message, sizeof(message), "Kliknuo si na igraca %d", clickedplayerid);
    SendClientMessage(playerid, 0xFFFFFFFF, message);
    return 1;
}
```

## Zabilješke

:::tip

Trenutno je dostupan samo jedan 'source' (0 - CLICK_SOURCE_SCOREBOARD). Postojanost ovog argumenta predlaže da će možda više izvora biti podržano u budućnosti.

:::

## Srodne Funkcije

- [OnPlayerClickTextDraw](OnPlayerClickTextDraw): Pozvana kada igrač klikne na textdraw.

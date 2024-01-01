---
title: OnPlayerText
description: Pozvano kada igrač pošalje chat poruku.
tags: ["player"]
---

## Deskripcija

Pozvano kada igrač pošalje chat poruku.

| Ime      | Deskripcija                      |
| -------- | -------------------------------- |
| playerid | ID igrača koji je napisao tekst. |
| text[]   | Tekst kojeg je igrač napisao.    |

## Returns

Uvijek je pozvan prvo u filterskriptama tako da će return-ovanje 0 blokirati ostale skripte da ga vide.

## Primjeri

```c
public OnPlayerText(playerid, text[])
{
    new pText[144];
    format(pText, sizeof (pText), "(%d) %s", playerid, text);
    SendPlayerMessageToAll(playerid, pText);
    return 0; // ignore the default text and send the custom one
}
```

## Zabilješke

:::tip

Ovaj callback pozvat će i NPC.

:::

## Srodne Funkcije

- [SendPlayerMessageToPlayer](../functions/SendPlayerMessageToPlayer): Forsira igrača da pošalje tekst drugom igraču.
- [SendPlayerMessageToAll](../functions/SendPlayerMessageToAll): Forsira igrača da pošalje tekst svim igračima.

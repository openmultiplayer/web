---
title: OnPlayerCommandText
description: Ovaj callback je pozvan kada igrač unese komandu u chat prozoru njegovog klijenta.
tags: ["player"]
---

## Deskripcija

Ovaj callback je pozvan kada igrač unese komandu u chat prozoru njegovog klijenta. Komande su sve ono što počinje sa krivom crtom u desno, npr. /help.

| Ime       | Deskripcija                                                    |
| --------- | -------------------------------------------------------------- |
| playerid  | ID igrača koji je unio komandu.                                |
| cmdtext[] | Komanda koju je igrač unio (Uključujući i krivu crtu u desno). |

## Returns

Uvijek je pozvana prva u filterskripti tako da return-ovanje 1 tu blokira ostale skripte da je vide.

## Primjeri

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/help", true))
    {
        SendClientMessage(playerid, -1, "SERVER: Ovo je /help komanda!");
        return 1;
        // Return-ovanje 1 obavještava server da je komanda procesuirana.
        // OnPlayerCommandText neće biti pozvan u ostalim skriptama.
    }
    return 0;
    // Return-ovanje 0 obavještava server da komanda nije procesuirana kroz ovu skriptu.
    // OnPlayerCommandText će biti pozvan u narednim skriptama sve dok ne dobije vrijednost 1.
    // Ako ni jedna skripta ne return-a 1, poruka 'SERVER: Unknown Command' (prevedeno: SERVER: Nepoznata Komanda) će biti pokazana igraču.
}
```

## Zabilješke

:::tip

Ovaj callback pozvat će i NPC.

:::

## Srodne Funkcije

- [SendRconCommand](../functions/SendRconCommand.md): Šalje RCON komandu preko skripte.

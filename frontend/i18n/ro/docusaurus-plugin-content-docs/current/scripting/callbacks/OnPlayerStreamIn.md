---
title: OnPlayerStreamIn
sidebar_label: OnPlayerStreamIn
description: Acest callback este apelat atunci când un jucător este transmis în flux de către clientul altui jucător.
tags: ["player"]
---

## Descriere

Acest callback este apelat atunci când un jucător este transmis în flux de către clientul altui jucător.

| Nume        | Descriere                                               |
| ----------- | ------------------------------------------------------- |
| playerid    | ID-ul jucătorului care a fost transmis în flux.         |
| forplayerid | ID-ul jucătorului care a transmis în flux celălalt jucător. |

## Returnări

Este întotdeauna numit primul în filterscript-uri.

## Exemple

```c
public OnPlayerStreamIn(playerid, forplayerid)
{
    new string[40];
    format(string, sizeof(string), "Jucătorul %d este acum transmis în flux pentru tine.", playerid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Note

<TipNPCCallbacks />

## Funcții similare
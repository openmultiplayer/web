---
title: OnPlayerStreamOut
description: Acest callback este apelat atunci când un jucător este transmis în flux de la clientul altui jucător.
tags: ["player"]
---

## Descriere

Acest callback este apelat atunci când un jucător este transmis în flux de la clientul altui jucător.

| Nume        | Descriere                                       |
| ----------- | ----------------------------------------------- |
| playerid    | Jucătorul care a fost destreamat.               |
| forplayerid | Jucătorul care a eliminat celălalt jucător.     |

## Returnări

Este întotdeauna numit primul în filterscript-uri.

## Examples

```c
public OnPlayerStreamOut(playerid, forplayerid)
{
    new string[80];
    format(string, sizeof(string), "Computerul dvs. tocmai a descărcat ID-ul jucătorului %d", playerid);
    SendClientMessage(forplayerid, 0xFF0000FF, string);
    return 1;
}
```

## Note

<TipNPCCallbacks />

## Funcții similare
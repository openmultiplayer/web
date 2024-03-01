---
title: CancelEdit
description: Prekida mod za editovanje objekta za igrača.
tags: []
---

## Deskripcija

Prekida mod za editovanje objekta za igrača.

| Ime      | Deskripcija                                            |
| -------- | ------------------------------------------------------ |
| playerid | ID igrača kojem će se prekinuti mod editovanja objekta |

## Returns

Ova funkcija ne vraća nikakve posebne vrijednosti.

## Primjeri

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/stopedit", true))
    {
        CancelEdit(playerid);
        SendClientMessage(playerid, 0xFFFFFFFF, "SERVER: You stopped editing the object!");
        return 1;
    }
    return 0;
}
```

## Srodne Funkcije

- [SelectObject](SelectObject): Selektovanje objekta.
- [EditObject](EditObject): Editovanje objekta.
- [EditPlayerObject](EditPlayerObject): Editovanje objekta igrača.
- [EditAttachedObject](EditAttachedObject): Editovanje zakačenog objekta.
- [CreateObject](CreateObject): Kreiranje objekta.
- [DestroyObject](DestroyObject): Uništavanje objekta.
- [MoveObject](MoveObject): Pomjeranje objekta.

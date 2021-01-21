---
title: GetPlayerInterior
description: Dohvaća trenutni enterijer igrača.
tags: ["player"]
---

## Deskripcija

Dohvaća trenutni enterijer igrača. Popis trenutno poznatih enterijera sa njihovim položajima nalazi se na ovoj stranici.

| Ime      | Deskripcija                    |
| -------- | ------------------------------ |
| playerid | Igrač za dobiti ID enterijera. |

## Returns

ID enterijera u kojem je igrač trenutno.

## Primjeri

```c
public OnPlayerCommandText(playerid,text[])
{
    if (strcmp(cmdtext,"/int",true) == 0)
    {
        new string[128];
        format(string, sizeof(string), "Ti si u enterijeru %i",GetPlayerInterior(playerid));
        SendClientMessage(playerid, 0xFF8000FF, string);
        return 1;
    }
    return 0;
}
```

## Zabilješke

:::tip

Always returns 0 for NPCs.

:::

## Srodne Funkcije

- [SetPlayerInterior](SetPlayerInterior): Postavlja igraču enterijer
- [GetPlayerVirtualWorld](GetPlayerVirtualWorld): Provjerava u kojem je igrač virtualnom svijetu.

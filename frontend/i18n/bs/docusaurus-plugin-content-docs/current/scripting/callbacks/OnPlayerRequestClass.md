---
title: OnPlayerRequestClass
sidebar_label: OnPlayerRequestClass
description: Pozvano kada igrač promijeni klasu na odabiru klase (i kada se odabir klase prvi put pojavi).
tags: ["player"]
---

## Deskripcija

Pozvano kada igrač promijeni klasu na odabiru klase (i kada se odabir klase prvi put pojavi).

| Ime      | Deskripcija                                                          |
| -------- | -------------------------------------------------------------------- |
| playerid | ID igrača koji je promijenio klasu.                                  |
| classid  | ID trenutne klase koja se pregledava (return-uje je AddPlayerClass). |

## Returns

Uvijek je pozvana prva u filterskripti.

## Primjeri

```c
public OnPlayerRequestClass(playerid,classid)
{
    if (classid == 3 && !IsPlayerAdmin(playerid))
    {
        SendClientMessage(playerid, COLOR_RED, "Ovaj skin je samo za admine!");
        return 0;
    }
    return 1;
}
```

## Zabilješke

:::tip

Ovaj callback je također pozvan kada igrač pritisne F4.

:::

## Srodne Funkcije

- [AddPlayerClass](../functions/AddPlayerClass): Dodaj klasu.

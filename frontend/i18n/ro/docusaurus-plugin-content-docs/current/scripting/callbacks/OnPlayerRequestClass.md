---
title: OnPlayerRequestClass
description: Apelat atunci când un jucător schimbă clasa la selecția clasei (și când apare prima dată selecția clasei).
tags: ["player"]
---

## Descriere

Apelat atunci când un jucător schimbă clasa la selecția clasei (și când apare prima dată selecția clasei).

| Nume     | Descriere                                                                |
| -------- | ------------------------------------------------------------------------ |
| playerid | ID-ul jucătorului care a schimbat clasa.                                 |
| classid  | ID-ul clasei curente care este vizualizată (returnat de AddPlayerClass). |

## Returnări

Este întotdeauna numit primul în filterscript-uri.

## Exemple

```c
public OnPlayerRequestClass(playerid,classid)
{
    if (classid == 3 && !IsPlayerAdmin(playerid))
    {
        SendClientMessage(playerid, COLOR_RED, "Acest skin este doar pentru administratori!");
        return 0;
    }
    return 1;
}
```

## Note

:::tip

Acest callback este apelat și atunci când un jucător apasă F4.

:::

## Funcții similare

- [AddPlayerClass](../functions/AddPlayerClass): Adăugați o clasă.
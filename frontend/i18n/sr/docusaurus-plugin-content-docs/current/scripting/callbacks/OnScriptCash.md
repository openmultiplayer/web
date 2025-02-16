---
title: OnScriptCash
sidebar_label: OnScriptCash
description: Ова повратна функција се позива када нешто у игри, као што су казина, даје играчу новац.
tags: ["player"]
---

:::warning

Ова повратна функција тренутно **НЕ РАДИ**.

:::

## Description

Ова повратна функција се позива када нешто у игри, као што су казина, даје играчу новац.

| Име      | Опис                                            |
|----------|-------------------------------------------------|
| playerid | ID играча који је добио новац из игре           |
| amount   | Износ новца који је дат или узет                |
| source   | Одакле новац долазиm                            |

## Враћа

Непознато, пошто ова функција тренутно не ради.

## Examples

```c
// Замишљено:

public OnScriptCash(playerid, amount, source)
{
    if (source == SCRIPT_CASH_CASINO)
    {
        SendClientMessage(playerid, -1, "You have won $%d from the casino!", amount);
    }
    else if (source == SCRIPT_CASH_VENDING_MACHINE)
    {
        SendClientMessage(playerid, -1, "You buyed a coke from vending machine for $%d", amount);
    }
    return 1;
}
```

## Повезане функције

Следеће функције могу бити корисне, јер су на неки начин повезане са овом повратном функцијом.

- [GetPlayerMoney](../functions/GetPlayerMoney): Враћа колико тренутно играч има новца код себе.

---
title: OnPlayerInteriorChange
sidebar_label: OnPlayerInteriorChange
description: Ова повратна функција се позива када играч промени интеријер.
tags: ["player"]
---

## Опис

Ова повратна функција се позива када играч промени интеријер. Може се активирати помоћу [SetPlayerInterior](../functions/SetPlayerInterior) или када играч уђе/изађе из зграде.

| Име           | Опис                                   |
| ------------- | -------------------------------------- |
| playerid      | Играч који је променио интеријер.      |
| newinteriorid | ID интеријера у ком је играч тренутно. |
| oldinteriorid | ID интеријера у ком је играч био.      |

## Враћа

Увек се позива прва у гамемод-у.

## Пример

```c
public OnPlayerInteriorChange(playerid, newinteriorid, oldinteriorid)
{
    new string[42];
    format(string, sizeof(string), "You went from interior %d to interior %d!", oldinteriorid, newinteriorid);
    SendClientMessage(playerid, COLOR_ORANGE, string);
    return 1;
}
```

## Повезане повратне функције

Следеће повратне функције могу бити корисне, јер су на један или други начин повезане са овим позивом.

- [OnPlayerStateChange](OnPlayerStateChange): Ова функција се позива када играч промени стање.

## Повезане функције

Следеће функције могу бити корисне, јер су на један или други начин повезане са овим позивом.

- [SetPlayerInterior](../functions/SetPlayerInterior): Поставља играчев интеријер.
- [GetPlayerInterior](../functions/GetPlayerInterior): Враћа тренутан ID играчевог интеријера.
- [LinkVehicleToInterior](../functions/LinkVehicleToInterior): Промените интеријер у којем се возило види.

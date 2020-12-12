---
title: OnGameModeInit
description: Ez a visszahívás akkor indul el, amikor a játékmód elindul.
tags: []
---

## Leírás

Ez a visszahívás akkor indul el, amikor a játékmód elindul.

## Példák

```c
public OnGameModeInit()
{
    print("Gamemode started!");
    return 1;
}
```

## Notes

:::tip

Ezt a funkciót egy filterszkriptben is fel lehet használni, hogy érzékelje, ha a gamemode változik az RCON parancsokkal, például a changemode vagy a gmx, mivel a gamemode megváltoztatása nem tölti be újra a filtercriptet.

:::

## Related Functions
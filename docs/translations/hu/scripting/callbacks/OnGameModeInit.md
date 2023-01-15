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
    print("Játékmód elindítva!");
    return 1;
}
```

## Megjegyzések

:::tip

Ezt a funkciót egy filterszkriptben is fel lehet használni, hogy érzékelje, ha a gamemode változik az RCON parancsokkal, például a changemode vagy a gmx, mivel a gamemode megváltoztatása nem tölti be újra a filtercriptet.

:::

## Kapcsolodó visszhívások

Ezek a visszahívások hasznosak lehetnek mivel valamilyen módon kapcsolódik ehhez a visszahíváshoz.

- [OnGameModeExit](OnGameModeExit): Ezt a visszahívást akkor hívja meg amikor egy játékmód leáll.
- [OnFilterScriptInit](OnFilterScriptInit): Ezt a visszahívást akkor hívja meg amikor egy filterszkript elindul.
- [OnFilterSciptExit](OnFilterScriptExit): Ezt a visszahívást akkor hívja meg amikor egy filterszkript leáll.

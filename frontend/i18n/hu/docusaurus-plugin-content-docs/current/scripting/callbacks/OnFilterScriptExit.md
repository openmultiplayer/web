---
title: OnFilterScriptExit
sidebar_label: OnFilterScriptExit
description: Ez a visszahívás egy filterszkript leállása során kerül meghívásra.
tags: []
---

## Leírás

Ez a visszahívás egy filterszkript leállása során kerül meghívásra. Csak abban a filterszkriptben lesz meghívva amelyik éppen leáll.

## Példák

```c
public OnFilterScriptExit()
{
    print("\n--------------------------------------");
    print("A filterszkript leállt!");
    print("--------------------------------------\n");
    return 1;
}
```

## Kapcsolodó visszahívások

Ezek a visszahívások hasznosak lehetnek mivel valamilyen módon kapcsolódik ehhez a visszahíváshoz.

- [OnFilterSciptInit](OnFilterScriptInit): Ezt a visszahívást akkor hívja meg amikor egy filterszkript elindul.
- [OnGameModeInit](OnGameModeInit): Ezt a visszahívást akkor hívja meg amikor egy játékmód elindul.
- [OnGameModeExit](OnGameModeExit): Ezt a visszahívást akkor hívja meg amikor egy játékmód leáll.

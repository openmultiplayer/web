---
title: OnFilterScriptInit
description: Ez a visszahívás egy filterszkript betöltése során kerül meghívásra.
tags: []
---

## Leírás

Ez a visszahívás egy filterszkript betöltése során kerül meghívásra. Csak abban a filterszkriptben lesz meghívva amelyik éppen betölt.

## Példák

```c
public OnFilterScriptInit()
{
    print("\n--------------------------------------");
    print("A filterszkript betöltött!");
    print("--------------------------------------\n");
    return 1;
}
```

## Kapcsolodó visszahívások

Ezek a visszahívások hasznosak lehetnek mivel valamilyen módon kapcsolódik ehhez a visszahíváshoz.

- [OnFilterSciptExit](OnFilterScriptExit): Ezt a visszahívást akkor hívja meg amikor egy filterszkript leáll.
- [OnGameModeInit](OnGameModeInit): Ezt a visszahívást akkor hívja meg amikor egy játékmód elindul.
- [OnGameModeExit](OnGameModeExit): Ezt a visszahívást akkor hívja meg amikor egy játékmód leáll.

---
title: OnGameModeExit
sidebar_label: OnGameModeExit
description: Ez a visszahívás akkor hívódik meg, amikor egy játékmód véget ér, akár a 'gmx' parancs használatával, a szerver leállásakor, vagy akár a GameModeExit-en keresztül.
tags: []
---

## Leírás

Ez a visszahívás akkor hívódik meg, amikor egy játékmód véget ér, akár a 'gmx' parancs használatával, a szerver leállásakor, vagy akár a GameModeExit-en keresztül.

## Példák

```c
public OnGameModeExit()
{
    print("Játékmód véget ért.");
    return 1;
}
```

## Megjegyzések

:::tip
 
Ezt a funckiót filterszkriptben arra is lehet használni, hogy érzékelje a ``changemode`` vagy ``gmx``RCON parancsot, mivel a játékmód megváltoztatása nem tölti újra a filterszkriptet.

:::

:::figyelmeztetés

Ha az OnGameModeExit parancsot az 'rcon gmx' konzolparanccsal együtt van használva, ne feledd, hogy előfordulhatnak hibák.

Példa erre a túlzott RemoveBuildingForPlayer hívása az OnGameModeInit alatt, ami az kliens összeomlásához vezethet. Ezt a visszahívást NEM hívja meg, ha a kliens összeomlik, vagy a folyamatot más módon leállítják, például a Linux kill parancsával vagy a Windows konzol bezárás gombjának megnyomásával.

:::

## Kapcsolodó visszhívások

Ezek a visszahívások hasznosak lehetnek mivel valamilyen módon kapcsolódik ehhez a visszahíváshoz.

[OnGameModeInit](OnGameModeInit): Ezt a visszahívást akkor hívja meg amikor egy játékmód elindul.
[OnFilterScriptInit](OnFilterScriptInit): Ezt a visszahívást akkor hívja meg amikor egy filterszkript elindul.
[OnFilterSciptExit](OnFilterScriptExit): Ezt a visszahívást akkor hívja meg amikor egy filterszkript leáll.

## Kapcsolodó funkciók

Ezek a funkciók hasznosak lehetnek mivel valamilyen módon kapcsolódik ehhez a visszahíváshoz.

- [GameModeExit](../functions/GameModeExit): Kilépés a jelenlegi játékmódból.

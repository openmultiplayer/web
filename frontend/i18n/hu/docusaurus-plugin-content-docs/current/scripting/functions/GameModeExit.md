---
title: GameModeExit
sidebar_label: GameModeExit
description: Leállítja a jelenlegi játékmódot
tags: []
---

## Leírás

Leállítja a jelenlegi játékmódot

## Visszatérések

Ez a függvény nem ad vissza konkrét értékeket.

## Példák

```c
if (OneTeamHasWon)
{
    GameModeExit();
}
```

## Kapcsolodó visszahívások

- [OnGameModeExit](../callbacks/OnGameModeExit): Ezt a visszahívást akkor hívja meg amikor egy játékmód leáll.

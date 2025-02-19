---
title: OnGameModeExit
sidebar_label: OnGameModeExit
description: Cette callback est appelée quand le gamemode s'éteint.
tags: [gamemode, éteint, exit, ended]
---

## Description

Cette callback est appelée quand le gamemode s'éteint.

## Exemple

```c
public OnGameModeExit()
{
    print("Gamemode éteint.");
    return 1;
}
```

## Astuce

:::tip

Cette fonction peut également être utilisée dans un filterscript pour détecter si le gamemode change avec les commandes RCON comme changemode ou gmx, car le changement de gamemode ne recharge pas un filterscript. Lorsque vous utilisez OnGameModeExit en conjonction avec la commande de console 'rcon gmx', gardez à l'esprit qu'il y a un risque que des bugs se produisent, par exemple avec les callbacks RemoveBuildingForPlayer excessifs pendant OnGameModeInit qui pourraient faire crash le joueur. Cette callback ne sera PAS appelée si le serveur crash ou si le processus est fermé par d'autres moyens, par exemple en appuyant sur le bouton de fermeture de la console Windows.

:::

## Callback connexe

- [OnGameModeInit](OnGameModeInit) : callback appelée quand le gamemode démarre

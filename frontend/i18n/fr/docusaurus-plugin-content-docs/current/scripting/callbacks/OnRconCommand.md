---
title: OnRconCommand
sidebar_label: OnRconCommand
description: Cette callback est appelée lorsqu'une commande est exécutée dans la console, ou via le jeu avec les commandes RCON.
tags: []
---

## Paramètres

Cette callback est appelée lorsqu'une commande est exécutée dans la console, ou via le jeu avec les commandes RCON  

| Nom            | Description                              |
| -------------- | -----------------------------------------|
| `string` cmd[] | Une chaîne contenant la commande écrite. |

## Valeur de retour

- **0** si la commande n'a pas été exécutée, le script sera aussi exécuté sur les filterscripts. 

- **1** si la commande a été exécutée, elle ne sera pas envoyée aux autres scripts.

## Exemples

```c
public OnRconCommand(cmd[])
{
    printf("[RCON]: Vous avez écrit '/rcon %s'!", cmd);
    return 0;
}
```

```c
public OnRconCommand(cmd[])
{
    if(!strcmp(cmd, "bonjour", true))
    {
        SendClientMessageToAll(0xFFFFFFAA, "Bonjour tous le monde!!");
        print("Vous avez envoyé un message de bonjour à tous les joueurs!");
        return 1;
    }
    return 0;
}
```

## Astuces

:::tip

/rcon n'est pas inclut dans `cmd` lorsqu'un joueur tape la commande.

Si vous utilisez la fonction `printf` dans cette callback, un message sera envoyé au joueur qui a tapé la commande dans le jeu, et dans les logs.

:::

:::warning

Vous devez inclure cette callback dans un filterscript chargé pour qu'elle marche dans le gamemode!

:::

## Fonction connexe

- [IsPlayerAdmin](../functions/IsPlayerAdmin): Vérifie si un joueur est loggé en RCON.

## Callback connexe

- [OnRconLoginAttempt](OnRconLoginAttempt): Appelée lorsqu'un joueur essaie de se connecter en RCON.

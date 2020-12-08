---
title: OnPlayerDisconnect
description: Cette callback est appelée quand un joueur se déconnecte du serveur.
tags: ["player"]
---

## Paramètres

Cette callback est appelée quand un joueur se déconnecte du serveur.

| Nom            | Description                                        |
| -------------- | -------------------------------------------------- |
| `int` playerid | ID du joueur qui se déconnecte                     |
| `int` reason   | Raison de la déconnexion _(v. tableau, infra)      |

## Valeur de retour

Cette callback ne retourne rien, mais doit retourner quelque chose. Autrement dit, `return callback();` ne fonctionnera pas car la callback ne retourne rien, mais un return _(`return 1;` ou `return 0;`)_ doit être effectué dans la callback.

## Exemple

```c
public OnPlayerDisconnect(playerid, reason)
{
    new
        szString[64],
        playerName[MAX_PLAYER_NAME];

    GetPlayerName(playerid, playerName, MAX_PLAYER_NAME);

    new szDisconnectReason[3][] =
    {
        "Timeout/Crash",
        "(/q)uitter",
        "Kick/Ban"
    };

    format(szString, sizeof szString, "[-] %s a quitté le serveur (%s).", playerName, szDisconnectReason[reason]);

    SendClientMessageToAll(0xC4C4C4FF, szString);
    return 1;
}
```

## Astuces

:::tip

Certaines fonctions peuvent ne pas fonctionner correctement quand cette callback est utilisée et que le joueur est déjà déconnecté. Cela signifie que vous ne pouvez pas avoir des informations sur celui-ci, par exemple avec GetPlayerIp et GetPlayerPos.

:::

## Callback connexe

- [OnPlayerConnect](OnPlayerConnect) : Quand le joueur se connecte au serveur.

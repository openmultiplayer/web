---
title: OnPlayerConnect
description: This callback is called when a player connects to the server.
tags: ["player"]
---

## Paramètres

Cette callback est appelée quand un joueur se connecte au serveur.

| Nom             | Description           |
| --------------- | --------------------- |
| `int` playerid  | ID du joueur connecté |

## Valeur de retour

Cette callback ne retourne rien, mais doit retourner quelque chose. Autrement dit, `return callback();` ne fonctionnera pas car la callback ne retourne rien, mais un return _(`return 1;` ou `return 0;`)_ doit être effectué dans la callback.

## Exemple

```c
public OnPlayerConnect(playerid)
{
    new
        string[64],
        playerName[MAX_PLAYER_NAME];
         
    /* Message de bienvenue */
    GetPlayerName(playerid, playerName, MAX_PLAYER_NAME);

    format(string, sizeof string, "[+] %s a rejoint le serveur. Bienvenue à lui !", playerName);
    SendClientMessageToAll(0xFFFFFFAA, string);
    
    return 1;
}
```

## Astuces

<TipNPCCallbacks />

## Callback connexe

- [OnPlayerDisconnect](OnPlayerDisonnect) : Quand un joueur se déconnecte du serveur.

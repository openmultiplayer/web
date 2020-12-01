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

**1** - Empêche les autres filterscripts de recevoir cette callback.

**0** - Indique que cette callback doit passer au filterscript suivant.

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

## Fonctions connexes

- [OnPlayerDisconnect](OnPlayerDisonnect) : Quand un joueur se déconnecte du serveur.

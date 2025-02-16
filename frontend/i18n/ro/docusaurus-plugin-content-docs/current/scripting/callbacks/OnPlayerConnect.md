---
title: OnPlayerConnect
description: Acest callback este apelat atunci când un jucător se conectează la server.
tags: ["player"]
---

## Descriere

Acest callback este apelat atunci când un jucător se conectează la server.

| Nume     | Descriere                            |
| -------- | ------------------------------------ |
| playerid | ID-ul jucătorului care s-a conectat. |

## Returnări

0 - Va împiedica alte filterscript-uri să primească acest callback.

1 - Indică faptul că acest callback va fi transmis următorului filterscript.

Este întotdeauna numit primul în filterscript-uri.

## Example

```c
public OnPlayerConnect(playerid)
{
    new
        string[64],
        playerName[MAX_PLAYER_NAME];

    GetPlayerName(playerid, playerName, MAX_PLAYER_NAME);
    format(string, sizeof string, "%s a intrat pe server. Bine ai venit!", playerName);
    SendClientMessageToAll(0xFFFFFFAA, string);
    return 1;
}
```

## Note

<TipNPCCallbacks />

## Funcții similare

- [OnPlayerDisconnect](OnPlayerDisconnect): Apelat când un jucător părăsește serverul. 
- [OnIncomingConnection](OnIncomingConnection): Apelat atunci când un jucător încearcă să se conecteze la server. 
- [OnPlayerFinishedDownloading](OnPlayerFinishedDownloading): Apelat când un jucător termină descărcarea modelelor personalizate. 
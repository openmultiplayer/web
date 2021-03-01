---
título: OnPlayerConnect
descripción: Este callback se llama cuando un jugador se conecta al servidor.
tags: ["player"]
---

## Descripción

Este callback se llama cuando un jugador se conecta al servidor.

| Nombre   | Descripción                          |
| -------- | ------------------------------------ |
| playerid | El ID del jugador que se conectó.    |

## Devoluciones

1 - Prevendrá a otros filterscripts de recibir este callback.

0 - Indica que este callback será pasado al siguiente filterscript.

Siempre se llama primero en filterscripts.

## Ejemplos

```c
public OnPlayerConnect(playerid)
{
    new
        string[64],
        playerName[MAX_PLAYER_NAME];

    GetPlayerName(playerid, playerName, MAX_PLAYER_NAME);
    format(string, sizeof string, "%s ingresó al servidor. Bienvenido!", playerName);
    SendClientMessageToAll(0xFFFFFFAA, string);
    return 1;
}
```

## Notas

<TipNPCCallbacksES />

## Funciones Relacionadas

---
título: OnPlayerDisconnect
descripción: Este callback se llama cuando un jugador se desconecta del servidor.
tags: ["player"]
---

## Descripción

Este callback se llama cuando un jugador se desconecta del servidor.

| Nombre     | Descripción                                      |
| -------- | -------------------------------------------------- |
| playerid | El ID del jugador que se desconectó.               |
| reason   | La razón de la desconexión. (ver tabla abajo)      |

## Devoluciones

1 - Prevendrá a otros filterscripts de recibir este callback.

0 - Indica que este callback será pasado al siguiente filterscript.

Siempre se llama primero en filterscripts.

## Razones

| ID | Razón         | Detalles                                                                                     |
| -- | ------------- | -------------------------------------------------------------------------------------------- |
| 0  | Timeout/Crash | La conexión del jugador se perdió. Ya sea si su juego crasheó o su internet tuvo una falla.  |
| 1  | Quit          | El jugador salió a propósito, ya sea con /quit (/q) o a través del menú de pausa.            |
| 2  | Kick/Ban      | El jugador fue kickeado o baneado por el servidor.                                           |

## Ejemplos

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
        "Quit",
        "Kick/Ban"
    };

    format(szString, sizeof szString, "%s se desconectó del servidor (%s).", playerName, szDisconnectReason[reason]);

    SendClientMessageToAll(0xC4C4C4FF, szString);
    return 1;
}
```

## Notas

:::tip

Algunas funciones pueden no funcionar correctamente cuando son usadas en este callback debido a que el jugador ya está desconectado cuando el callback es llamado. Esto quiere decir que no podés obtener información inequívoca de funciones como GetPlayerIp o GetPlayerPos.

:::

## Funciones Relacionadas

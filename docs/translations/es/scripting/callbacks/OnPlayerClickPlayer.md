---
título: OnPlayerClickPlayer
descripción: Se llama cuando un jugador hace doble click a un jugador en el scoreboard (menú TAB).
tags: ["player"]
---

## Descripción

Se llama cuando un jugador hace doble click a un jugador en el scoreboard (menú TAB).

| Nombre          | Descripción                                                      |
| --------------- | ---------------------------------------------------------------- |
| playerid        | El ID del jugador que clickeó a otro jugador en el scoreboard.   |
| clickedplayerid | El ID del jugador que fue clickeado en el scoreboard.            |
| source          | El origen del click del jugador (ver notas abajo).               |

## Devoluciones

1 - Prevendrá a otros filterscripts de recibir este callback.

0 - Indica que este callback será pasado al siguiente filterscript.

Siempre se llama primero en filterscripts.

## Ejemplos

```c
public OnPlayerClickPlayer(playerid, clickedplayerid, CLICK_SOURCE:source)
{
    new message[32];
    format(message, sizeof(message), "Clickeaste en el jugador %d", clickedplayerid);
    SendClientMessage(playerid, 0xFFFFFFFF, message);
    return 1;
}
```

## Notas

:::tip

Actualmente hay un solo origen/source (0 - CLICK_SOURCE_SCOREBOARD). La existencia de este argumento sugiere que más origenes pueden ser soportados en el futuro.

:::

## Funciones Relacionadas

- [OnPlayerClickTextDraw](OnPlayerClickTextDraw): Se llama cuando un jugador clickea en un textdraw.

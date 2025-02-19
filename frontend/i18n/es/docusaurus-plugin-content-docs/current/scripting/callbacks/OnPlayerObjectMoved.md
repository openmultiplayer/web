---
título: OnPlayerObjectMoved
descripción: Este callback se llama cuando un objeto de jugador es movido después de MovePlayerObject (cuando este termina de moverse).
tags: ["player"]
---

## Descripción

Este callback se llama cuando un objeto de jugador es movido después de MovePlayerObject (cuando este termina de moverse).

| Nombre   | Descripción                                 |
| -------- | ------------------------------------------- |
| playerid | El playerid al que está asignado el objeto. |
| objectid | El ID del objeto de jugador que fue movido. |

## Devoluciones

Siempre se llama primero en filterscripts.

## Ejemplos

```c
public OnPlayerObjectMoved(playerid, objectid)
{
    printf("Objeto de jugador movido: ID de objeto: %d ID del jugador: %d", objectid, playerid);
    return 1;
}
```

## Notas

:::tip

Este callback también puede llamarse por NPC.

:::

## Funciones Relacionadas

- [MovePlayerObject](../functions/MovePlayerObject): Mover un objeto de jugador.
- [IsPlayerObjectMoving](../functions/IsPlayerObjectMoving): Comprobar si el objeto de jugador está moviéndose.
- [StopPlayerObject](../functions/StopPlayerObject): Detener el movimiento de un objeto de jugador.
- [CreatePlayerObject](../functions/CreatePlayerObject): Crear un objeto para un solo jugador.
- [DestroyPlayerObject](../functions/DestroyPlayerObject): Destruir un objeto de jugador.

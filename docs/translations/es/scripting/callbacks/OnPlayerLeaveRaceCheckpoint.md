---
título: OnPlayerLeaveRaceCheckpoint
descripcion: Este callback se llama cuando un jugador sale de un checkpoint de carreras.
tags: ["player", "checkpoint", "racecheckpoint"]
---

## Descripción

Este callback se llama cuando un jugador sale de un checkpoint de carreras.

| Nombre   | Descripción                                             |
| -------- | ------------------------------------------------------- |
| playerid | El ID del jugador que salió del checkpoint de carreras. |

## Devoluciones

Siempre se llama primero en filterscripts.

## Ejemplos

```c
public OnPlayerLeaveRaceCheckpoint(playerid)
{
    printf("El jugador %d salió de un checkpoint de carreras!", playerid);
    return 1;
}
```

## Notas

<TipNPCCallbacksES />

## Funciones Relacionadas

- [SetPlayerCheckpoint](../functions/SetPlayerCheckpoint): Crear un checkpoint a un jugador.
- [DisablePlayerCheckpoint](../functions/DisablePlayerCheckpoint): Deshabilitar el checkpoint actual de un jugador.
- [IsPlayerInCheckpoint](../functions/IsPlayerInCheckpoint): Comprobar si el jugador está en un checkpoint.
- [SetPlayerRaceCheckpoint](../functions/SetPlayerRaceCheckpoint): Crear un checkpoint de carreras a un jugador.
- [DisablePlayerRaceCheckpoint](../functions/DisablePlayerRaceCheckpoint): Deshabilitar el checkpoint de carreras actual del jugador.
- [IsPlayerInRaceCheckpoint](../functions/IsPlayerInRaceCheckpoint): Comprobar si el jugador está en un checkpoint de carreras.


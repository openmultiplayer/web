---
título: OnPlayerLeaveCheckpoint
descripción: Este callback se llama cuando un jugador sale del checkpoint establecido a él por SetPlayerCheckpoint.
tags: ["player", "checkpoint"]
---

## Descripción

Este callback se llama cuando un jugador sale del checkpoint establecido a él por SetPlayerCheckpoint. Sólo se puede establecer un checkpoint al mismo tiempo al jugador.

| Nombre   | Descripción                                      |
| -------- | ------------------------------------------------ |
| playerid | El ID del jugador que salió de su checkpoint.    |

## Devoluciones

Siempre se llama primero en filterscripts.

## Ejemplos

```c
public OnPlayerLeaveCheckpoint(playerid)
{
    printf("El jugador %i salió de un checkpoint!", playerid);
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

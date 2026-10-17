---
título: OnPlayerEnterRaceCheckpoint
descripción: Este callback se llama cuando un jugador entra en un checkpoint de carrera.
tags: ["player", "checkpoint", "racecheckpoint"]
---

## Descripción

Este callback se llama cuando un jugador entra en un checkpoint de carrera.

| Nombre   | Descripción                                             |
| -------- | ------------------------------------------------------- |
| playerid | El ID del jugador que entró a un checkpoint de carrera. |

## Devoluciones

Siempre se llama primero en filterscripts.

## Ejemplos

```c
public OnPlayerEnterRaceCheckpoint(playerid)
{
    printf("El jugador %d entró a un checkpoint de carreras!", playerid);
    return 1;
}
```

## Notas

<NoteNPCCallbacksES />

## Callbacks Relacionados

Los siguientes callbacks pueden ser útiles, ya que están relacionados de alguna forma u otra con OnPlayerEnterRaceCheckpoint:

- [OnPlayerEnterCheckpoint](OnPlayerEnterCheckpoint): Llamado cuando un jugador ingresa a un checkpoint.
- [OnPlayerLeaveCheckpoint](OnPlayerLeaveCheckpoint): Llamado cuando un jugador sale de un checkpoint.
- [OnPlayerLeaveRaceCheckpoint](OnPlayerLeaveRaceCheckpoint): Llamado cuando un jugador sale de un checkpoint de carreras.

## Funciones Relacionadas

Las siguientes funciones pueden ser útiles, ya que están relacionadas de alguna forma u otra con OnPlayerEnterRaceCheckpoint:

- [SetPlayerCheckpoint](../functions/SetPlayerCheckpoint): Crea un checkpoint a un jugador.
- [DisablePlayerCheckpoint](../functions/DisablePlayerCheckpoint): Desactiva el checkpoint actual de un jugador.
- [IsPlayerInCheckpoint](../functions/IsPlayerInCheckpoint): Comprueba si un jugador está en un checkpoint.
- [SetPlayerRaceCheckpoint](../functions/SetPlayerRaceCheckpoint): Crea un checkpoint de carrera a un jugador.
- [DisablePlayerRaceCheckpoint](../functions/DisablePlayerRaceCheckpoint): Desactiva el checkpoint de carrera actual del jugador.
- [IsPlayerInRaceCheckpoint](../functions/IsPlayerInRaceCheckpoint): Comprueba si el jugador está en un checkpoint de carrera.

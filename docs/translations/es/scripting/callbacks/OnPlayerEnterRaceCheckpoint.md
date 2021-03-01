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

<TipNPCCallbacksES />

## Funciones Relacionadas

- [SetPlayerCheckpoint](../functions/SetPlayerCheckpoint): Crea un checkpoint a un jugador.
- [DisablePlayerCheckpoint](../functions/DisablePlayerCheckpoint): Desactiva el checkpoint actual de un jugador.
- [IsPlayerInCheckpoint](../functions/IsPlayerInCheckpoint): Comprueba si un jugador está en un checkpoint.
- [SetPlayerRaceCheckpoint](../functions/SetPlayerRaceCheckpoint): Crea un checkpoint de carrera a un jugador.
- [DisablePlayerRaceCheckpoint](../functions/DisablePlayerRaceCheckpoint): Desactiva el checkpoint de carrera actual del jugador.
- [IsPlayerInRaceCheckpoint](../functions/IsPlayerInRaceCheckpoint): Comprueba si el jugador está en un checkpoint de carrera.

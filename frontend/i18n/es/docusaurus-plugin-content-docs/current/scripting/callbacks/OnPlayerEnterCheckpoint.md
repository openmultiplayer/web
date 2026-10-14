---
título: OnPlayerEnterCheckpoint
descripción: Este callback se llama cuando un jugador entra al checkpoint establecido para ese jugador.
tags: ["player", "checkpoint"]
---

## Descripción

Este callback se llama cuando un jugador entra al checkpoint establecido para ese jugador.

| Nombre   | Descripción                             |
| -------- | --------------------------------------- |
| playerid | ID del jugador que entró al checkpoint. |

## Devoluciones

Siempre se llama primero en filterscripts.

## Ejemplos

```c
//En este ejemplo, un checkpoint se crea al jugador cuando spawnea,
//el cual crea un vehículo y desactiva el checkpoint.
public OnPlayerSpawn(playerid)
{
    SetPlayerCheckpoint(playerid, 1982.6150, -220.6680, -0.2432, 3.0);
    return 1;
}

public OnPlayerEnterCheckpoint(playerid)
{
    CreateVehicle(520, 1982.6150, -221.0145, -0.2432, 82.2873, -1, -1, 60000);
    DisablePlayerCheckpoint(playerid);
    return 1;
}
```

## Notas

<NoteNPCCallbacksES />

## Callbacks Relacionados

Los siguientes callbacks pueden ser útiles, ya que están relacionados de alguna forma u otra con OnPlayerEnterCheckpoint:

- [OnPlayerLeaveCheckpoint](OnPlayerLeaveCheckpoint): Llamado cuando un jugador sale de un checkpoint.
- [OnPlayerEnterRaceCheckpoint](OnPlayerEnterRaceCheckpoint): Llamado cuando un jugador ingresa a un checkpoint de carreras.
- [OnPlayerLeaveRaceCheckpoint](OnPlayerLeaveRaceCheckpoint): Llamado cuando un jugador sale de un checkpoint de carreras.

## Funciones Relacionadas

Las siguientes funciones pueden ser útiles, ya que están relacionadas de alguna forma u otra con OnPlayerEnterCheckpoint:

- [SetPlayerCheckpoint](../functions/SetPlayerCheckpoint): Crea un checkpoint a un jugador.
- [DisablePlayerCheckpoint](../functions/DisablePlayerCheckpoint): Desactiva el checkpoint actual de un jugador.
- [IsPlayerInCheckpoint](../functions/IsPlayerInCheckpoint): Comprueba si un jugador está en un checkpoint.
- [SetPlayerRaceCheckpoint](../functions/SetPlayerRaceCheckpoint): Crea un checkpoint de carrera a un jugador.
- [DisablePlayerRaceCheckpoint](../functions/DisablePlayerRaceCheckpoint): Desactiva el checkpoint de carrera actual del jugador.
- [IsPlayerInRaceCheckpoint](../functions/IsPlayerInRaceCheckpoint): Comprueba si el jugador está en un checkpoint de carrera.

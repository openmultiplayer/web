---
título: OnPlayerEnterCheckpoint
descripción: Este callback se llama cuando un jugador entra al checkpoint establecido para ese jugador.
tags: ["player", "checkpoint"]
---

## Descripción

Este callback se llama cuando un jugador entra al checkpoint establecido para ese jugador.

| Nombre   | Descripción                            |
| -------- | -------------------------------------- |
| playerid | ID del jugador que entró al checkpoint.|

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

<TipNPCCallbacksES />

## Funciones Relacionadas

- [SetPlayerCheckpoint](../functions/SetPlayerCheckpoint): Crea un checkpoint a un jugador.
- [DisablePlayerCheckpoint](../functions/DisablePlayerCheckpoint): Desactiva el checkpoint actual de un jugador.
- [IsPlayerInCheckpoint](../functions/IsPlayerInCheckpoint): Comprueba si un jugador está en un checkpoint.
- [SetPlayerRaceCheckpoint](../functions/SetPlayerRaceCheckpoint): Crea un checkpoint de carrera a un jugador.
- [DisablePlayerRaceCheckpoint](../functions/DisablePlayerRaceCheckpoint): Desactiva el checkpoint de carrera actual del jugador.
- [IsPlayerInRaceCheckpoint](../functions/IsPlayerInRaceCheckpoint): Comprueba si el jugador está en un checkpoint de carrera.

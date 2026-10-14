---
título: OnPlayerExitVehicle
descripción: Este callback se llama cuando un jugador comienza a salir de un vehículo.
tags: ["player", "vehicle"]
---

## Descripción

Este callback se llama cuando un jugador comienza a salir de un vehículo.

| Nombre    | Descripción                                          |
| --------- | ---------------------------------------------------- |
| playerid  | El ID del jugador que está saliendo de un vehículo.  |
| vehicleid | El ID del vehículo del que el jugador está saliendo. |

## Devoluciones

Siempre se llama primero en filterscripts.

## Ejemplos

```c
public OnPlayerExitVehicle(playerid, vehicleid)
{
    new string[35];
    format(string, sizeof(string), "INFORMACIÓN: Estás saliendo del vehículo %i", vehicleid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Notas

:::warning

No se llama si el jugador se cae de una moto o es removido del vehículo por otros medios como usando SetPlayerPos. Debes usar OnPlayerStateChange y comprobar si su estado anterior es PLAYER_STATE_DRIVER o PLAYER_STATE_PASSENGER y su nuevo estado es PLAYER_STATE_ONFOOT.

:::

## Callbacks Relacionados

Los siguientes callbacks pueden ser útiles, ya que están relacionados de alguna forma u otra con OnPlayerExitVehicle:

- [OnPlayerStateChange](OnPlayerStateChange): Llamado cuando el estado del jugador cambia.

## Funciones Relacionadas

Las siguientes funciones pueden ser útiles, ya que están relacionadas de alguna forma u otra con OnPlayerExitVehicle:

- [RemovePlayerFromVehicle](../functions/RemovePlayerFromVehicle): Sacar a un jugador de un vehículo.
- [GetPlayerVehicleSeat](../functions/GetPlayerVehicleSeat): Comprobar en qué asiento está un jugador.

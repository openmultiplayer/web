---
título: OnPlayerEnterVehicle
descripción: Este callback se llama cuando un jugador comienza a entrar a un vehículo, o sea que el jugador aún no estará en el vehículo cuando este callback se llame.
tags: ["player", "vehicle"]
---

## Descripción

Este callback se llama cuando un jugador comienza a entrar a un vehículo, o sea que el jugador aún no estará en el vehículo cuando este callback se llame.

| Nombre      | Descripción                                                          |
| ----------- | -------------------------------------------------------------------- |
| playerid    | ID del jugador que intenta entrar a un vehículo.                     | 
| vehicleid   | ID del vehículo al que el jugador está intentando entrar.            | 
| ispassenger | 0 si está entrando como conductor. 1 si está entrando como pasajero. | 

## Devoluciones

Siempre se llama primero en filterscripts.

## Ejemplos

```c
public OnPlayerEnterVehicle(playerid, vehicleid, ispassenger)
{
    new string[128];
    format(string, sizeof(string), "Estás entrando al vehículo %i", vehicleid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Notas

:::tip

Este callback es llamado cuando un jugador COMIENZA a entrar a un vehículo, no cuando este ENTRÓ realmente. Vea OnPlayerStateChange. Este callback es igualmente llamado si al jugador se le niega la entrada (ej. el auto está cerrado o lleno).

:::

## Funciones Relacionadas

- [PutPlayerInVehicle](../functions/PutPlayerInVehicle): Pone a un jugador adentro de un vehículo.
- [GetPlayerVehicleSeat](../functions/GetPlayerVehicleSeat): Comprueba en qué asiento está un jugador.

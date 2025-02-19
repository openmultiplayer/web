---
título: OnPlayerInteriorChange
descripción: Se llama cuando un jugador cambia de interior.
tags: ["player"]
---

## Descripción

Se llama cuando un jugador cambia de interior. Puede ser desencadenada por SetPlayerInterior o cuando un jugador entra o sale de un edificio.

| Nombre        | Descripción                                    |
| ------------- | ---------------------------------------------- |
| playerid      | El ID del jugador que cambió de interior.      |
| newinteriorid | El interior en el que el jugador está ahora.   |
| oldinteriorid | El interior en el que el jugador estaba antes. |

## Devoluciones

Siempre se llama primero en el gamemode.

## Ejemplos

```c
public OnPlayerInteriorChange(playerid, newinteriorid, oldinteriorid)
{
    new string[42];
    format(string, sizeof(string), "Cambiaste del interior %d al interior %d!", oldinteriorid, newinteriorid);
    SendClientMessage(playerid, COLOR_ORANGE, string);
    return 1;
}
```

## Funciones Relacionadas

- [SetPlayerInterior](../functions/SetPlayerInterior): Establecer el interior a un jugador.
- [GetPlayerInterior](../functions/GetPlayerInterior): Obtener el interior actual de un jugador.
- [LinkVehicleToInterior](../functions/LinkVehicleToInterior): Cambiar el interior en el que un vehículo es visible.
- [OnPlayerStateChange](OnPlayerStateChange): Se llama cuando el estado de un jugador cambia.

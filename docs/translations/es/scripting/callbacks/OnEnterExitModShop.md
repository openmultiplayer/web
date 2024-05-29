---
título: OnEnterExitModShop
descripción: Este callback se llama cuando un jugador entra o sale de un taller de modificación.
tags: []
---

## Descripción

Este callback se llama cuando un jugador entra o sale de un taller de modificación.

| Nombre     | Descripción                                                                  |
| ---------- | ---------------------------------------------------------------------------- |
| playerid   | El ID del jugador que entró o salió del taller de modificación.              |
| enterexit  | 1 si el jugador entró o 0 si salió.                                          |
| interiorid | El ID del interior del taller al que el jugador entró (0 si salió).          |

## Devoluciones

Siempre se llama primero en filterscripts.

## Ejemplos

```c
public OnEnterExitModShop(playerid, enterexit, interiorid)
{
    if (enterexit == 0) // Si enterexit es 0, esto quiere decir que está saliendo del taller
    {
        SendClientMessage(playerid, COLOR_WHITE, "Buen auto! Pagás $100.");
        GivePlayerMoney(playerid, -100);
    }
    return 1;
}
```

## Notas

:::warning

Bugs conocidos: Los jugadores colisionan cuando entran al mismo taller de modificación.

:::

## Callbacks Relacionados
Los siguientes callbacks pueden ser útiles, ya que están relacionados de alguna forma u otra con OnEnterExitModShop:
- [OnVehicleMod](../callbacks/OnVehicleMod): Este callback es llamado cuando un vehículo es modificado.
- [OnVehicleRespray](../callbacks/OnVehicleRespray): Este callback es llamado cuando un jugador sale del taller de modificaciones, incluso si los colores no fueron modificados.
- [OnVehiclePaintjob](../callbacks/OnVehiclePaintjob): Este callback es llamado cuando un jugador realiza una vista previa de una pintura en el taller. Puedes ver las identificaciones en [Vehicle Paintjob IDs](../resources/paintjobs)

## Funciones Relacionadas
Las siguientes funciones pueden ser útiles, ya que están relacionadas de alguna forma u otra con OnEnterExitModShop:
- [IsPlayerInModShop](../functions/IsPlayerInModShop): Verifica que un jugador este en una tienda de modificaciones.
- [AddVehicleComponent](../functions/AddVehicleComponent): Añade un componente a un vehículo.

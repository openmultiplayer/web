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

## Funciones Relacionadas

- [AddVehicleComponent](../functions/AddVehicleComponent): Añadir un componente a un vehículo.

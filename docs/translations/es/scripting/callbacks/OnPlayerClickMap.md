---
título: OnPlayerClickMap
descripción: OnPlayerClickMap se llama cuando un jugador pone un objetivo/marca en el mapa del menú de pausa (usando click derecho).
tags: ["jugador"]
---

## Descripción

OnPlayerClickMap se llama cuando un jugador pone un objetivo/marca en el mapa del menú de pausa (usando click derecho).

| Nombre   | Descripción                                                                   |
| -------- | ----------------------------------------------------------------------------- |
| playerid | El ID del jugador que puso un objetivo/marcador en el mapa.                   |
| Float:fX | La coordenada X donde el jugador clickeó.                                     |
| Float:fY | La coordenada Y donde el jugador clickeó.                                     |
| Float:fZ | La coordenada Z donde el jugador clickeó (impreciso - ver nota abajo).        |

## Devoluciones

1 - Prevendrá a otros filterscripts de recibir este callback.

0 - Indica que este callback será pasado al siguiente filterscript.

Siempre se llama primero en filterscripts.

## Ejemplos

```c
public OnPlayerClickMap(playerid, Float:fX, Float:fY, Float:fZ)
{
    SetPlayerPosFindZ(playerid, fX, fY, fZ);
    return 1;
}
```

## Notas

:::tip

Como dice el nombre del callback, sólo se llama cuando el jugador hace click para marcar el punto y no cuando presiona la tecla. El valor Z devuelto será 0 (inválido) si el área clickeada en el mapa está muy lejos del jugador; usá los plugins MapAndreas o ColAndreas para recibir una coordenada Z más precisa.

:::

## Funciones Relacionadas

---
título: OnPlayerRequestClass
descripción: Se llama cuando un jugador cambia de clase en la selección de clase (y cuando la selección de clase aparece por primera vez).
tags: ["player"]
---

## Descripción

Se llama cuando un jugador cambia de clase en la selección de clase (y cuando la selección de clase aparece por primera vez).

| Nombre   | Descripción                                                            	   |
| -------- | ----------------------------------------------------------------------------- |
| playerid | El ID del jugador que cambió de clase.                                 	   |
| classid  | El ID de la clase actual que está siendo vista (devuelto por AddPlayerClass). |

## Devoluciones

Siempre se llama primero en filterscripts.

## Ejemplos

```c
public OnPlayerRequestClass(playerid,classid)
{
    if (classid == 3 && !IsPlayerAdmin(playerid))
    {
        SendClientMessage(playerid, COLOR_RED, "Este skin es solo para administradores!");
        return 0;
    }
    return 1;
}
```

## Notas

:::tip

Este callback también se llama cuando un jugador presiona F4.

:::

## Funciones Relacionadas

- [AddPlayerClass](../functions/AddPlayerClass): Añadir una clase.

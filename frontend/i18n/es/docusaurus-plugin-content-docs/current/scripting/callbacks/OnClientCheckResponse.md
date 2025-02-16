---
título: OnClientCheckResponse
descripción: Este callback se llama cuando una función SendClientCheck es completada.
tags: []
---

## Descripción

Este callback se llama cuando una función SendClientCheck es completada.

| Nombre        | Descripción                       |
| ------------- | --------------------------------- |
| playerid      | El ID del jugador verificado.     |
| actionid      | El tipo de chequeo realizado.     |
| memaddr       | La dirección requerida.           |
| retndata      | El resultado del chequeo.         |

## Devoluciones

Siempre se llama primero en filterscripts.

## Ejemplos

```c
public OnPlayerConnect(playerid)
{
    SendClientCheck(playerid, 0x48, 0, 0, 2);
    return 1;
}

public OnClientCheckResponse(playerid, actionid, memaddr, retndata)
{
    if(actionid == 0x48) // or 72
    {
        print("ADVERTENCIA: El jugador no parece estar usando una computadora normal!");
        Kick(playerid);
    }
    return 1;
}
```

## Notas

:::warning

Este callback sólo se llama cuando está en un filterscript.

:::

## Funciones Relacionadas
La siguiente función puede ser útil, ya que está relacionada de alguna forma u otra con OnClientCheckResponse:
- [SendClientCheck](../functions/SendClientCheck): Realiza un chequeo de memoria en el cliente.

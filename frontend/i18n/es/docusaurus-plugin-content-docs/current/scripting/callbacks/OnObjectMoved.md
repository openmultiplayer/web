---
título: OnObjectMoved
descripción: Este callback se llama cuando un objeto es movido después de usar MoveObject (cuando este termina de moverse).
tags: []
---

## Descripción

Este callback se llama cuando un objeto es movido después de usar MoveObject (cuando este termina de moverse).

| Nombre   | Descripción                         |
| -------- | ----------------------------------- |
| objectid | El ID del objeto que fue movido.    |

## Devoluciones

Siempre se llama primero en filterscripts.

## Ejemplos

```c
public OnObjectMoved(objectid)
{
    printf("El objeto %d finalizó su movimiento.", objectid);
    return 1;
}
```

## Notas

:::tip

SetObjectPos no funciona cuando es usado en este callback. Para solucionarlo, vuelva a crear el objeto.

:::

## Funciones Relacionadas

- [MoveObject](../functions/MoveObject): Mover un objeto.
- [MovePlayerObject](../functions/MovePlayerObject): Mover un objeto de jugador.
- [IsObjectMoving](../functions/IsObjectMoving): Chequear si el objeto está moviéndose.
- [StopObject](../functions/StopObject): Para el movimiento de un objeto.
- [OnPlayerObjectMoved](OnPlayerObjectMoved): Se llama cuando un objeto de jugador deja de moverse.

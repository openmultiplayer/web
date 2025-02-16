---
título: OnNPCConnect
descripción: This callback is called when a NPC successfully connects to the server.
tags: ["npc"]
---

## Descripción

Este callback se llama cuando un NPC se conecta con éxito al servidor.

| Nombre         | Descripción                                        |
| -------------- | -------------------------------------------------- |
| myplayerid     | El ID de jugador que se le ha dado al NPC          |

## Ejemplos

```c
public OnNPCConnect(myplayerid)
{
    printf("Me conecté correctamente al servidor con la ID %i!", myplayerid);
}
```

## Funciones Relacionadas

Los siguientes callbacks pueden ser útiles, ya que están relacionadas con esta devolución de llamada de una forma u otra.

- [OnNPCDisconnect](OnNPCDisconnect): Este callback se llama cuando el NPC se desconecta del servidor.
- [OnPlayerConnect](OnPlayerConnect): Este callback se llama cuando un jugador se conecta al servidor.
- [OnPlayerDisconnect](OnPlayerDisconnect): Este callback se llama cuando un jugador abandona el servidor.

---
título: OnNPCDisconnect
descripción: Este callback se llama cuando un NPC se desconecta del servidor.
tags: ["npc"]
---

## Descripción

Este callback se llama cuando un NPC se desconecta del servidor.

| Nombre       | Descripción                                             |
| ------------ | ------------------------------------------------------- |
| reason[]      | La razón por la cual el NPC se desconectó del servidor  |  

## Ejemplos

```c
public OnNPCDisconnect(reason[])
{
    printf("Desconectado del servidor. %s", reason);
}
```

## Callbacks relacionados

Los siguientes callbacks pueden ser útiles, ya que están relacionados con OnNPCDisconnect de alguna forma u otra.

- [OnNPCConnect](OnNPCConnect): Este callback es llamado cuando el NPC se conecta al servidor exitosamente.
- [OnPlayerDisconnect](OnPlayerDisconnect): Este callback es llamado cuando un usuario se desconecta del servidor.
- [OnPlayerConnect](OnPlayerConnect): Este callback es llamado cuando un usuario se conecta al servidor.

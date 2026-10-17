---
título: OnIncomingConnection
descripción: Este callback se llama cuando una dirección IP intenta establecer una conexión con el servidor.
tags: []
---

## Descripción

Este callback se llama cuando una dirección IP intenta establecer una conexión con el servidor. Para bloquear conexiones entrantes, use BlockIpAdress.

| Nombre       | Descripción                                       |
| ------------ | ------------------------------------------------- |
| playerid     | El ID del jugador que está intentando conectarse. |
| ip_address[] | La IP del jugador que está intentando conectarse. |
| port         | El puerto de la conexión intentada.               |

## Devoluciones

1 - Prevendrá a otros filterscripts de recibir este callback.

0 - Indica que este callback será pasado al siguiente filterscript.

Siempre se llama primero en filterscripts.

## Ejemplos

```c
public OnIncomingConnection(playerid, ip_address[], port)
{
    printf("Conexión entrante del jugador ID %i [IP/puerto: %s:%i]", playerid, ip_address, port);
    return 1;
}
```

## Callbacks Relacionados

Los siguientes callbacks pueden ser útiles, ya que están relacionados de alguna forma u otra con OnIncomingConnection:

- [OnPlayerConnect](OnPlayerConnect): Llamado cuando se conecta un jugador.
- [OnPlayerDisconnect](OnPlayerDisconnect): Llamado cuando un jugador se desconecta del servidor.

## Funciones Relacionadas

Las siguientes funciones pueden ser útiles, ya que están relacionadas de alguna forma u otra con OnIncomingConnection:

- [BlockIpAddress](../functions/BlockIpAddress): Bloquea una dirección IP de conectarse al servidor por un tiempo determinado.
- [UnBlockIpAddress](../functions/UnBlockIpAddress): Desbloquea una IP que fue anteriormente bloqueada.

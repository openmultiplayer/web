---
título: OnPlayerFinishedDownloading
descripción: Este callback se llama cuando un jugador finaliza de descargar modelos personalizados.
tags: ["player"]
---

<VersionWarnES name='callback' version='SA-MP 0.3.DL R1' />

## Descripción

Este callback se llama cuando un jugador finaliza de descargar modelos personalizados. Para más información sobre cómo añadir modelos personalizados a su servidor, vea el thread de lanzamiento y este tutorial.

| Nombre       | Descripción                                                                    |
| ------------ | ------------------------------------------------------------------------------ |
| playerid     | El ID del jugador que finalizó de descargar modelos personalizados.            |
| virtualworld | El ID del mundo virtual en el que el jugador terminó de descargar los modelos. |

## Devoluciones

Este callback no controla devoluciones.

## Ejemplos

```c
public OnPlayerFinishedDownloading(playerid, virtualworld)
{
    SendClientMessage(playerid, 0xffffffff, "Descargas finalizadas.");
    return 1;
}
```

## Notas

:::tip

Este callback se llama cada vez que un jugador cambia de mundo virtual, incluso si no hay modelos personalizados presentes en ese mundo. 

:::

## Funciones Relacionadas

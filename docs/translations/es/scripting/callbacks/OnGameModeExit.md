---
título: OnGameModeExit
descripción: Este callback es llamado cuando un gamemode termina, ya sea mediante 'gmx', cuando el servidor se apaga, o cuando se usa GameModeExit.
tags: []
---

## Descripción

Este callback es llamado cuando un gamemode termina, ya sea mediante 'gmx', cuando el servidor se apaga, o cuando se usa [GameModeExit](../functions/GameModeExit).

## Ejemplos

```c
public OnGameModeExit()
{
    print("Gamemode terminado.");
    return 1;
}
```

## Notas

:::tip

Esta función también puede ser usada en un filterscript para detectar si el gamemode cambia, con comandos RCON como 'changemode' o 'gmx', ya que cambiando el gamemode no recarga un filterscript. Cuando usamos OnGameModeExit en conjunto con el comando de consola 'rcon gmx' tener en cuenta que hay una potencial posibilidad de que ocurran bugs en el cliente. Un ejemplo de esto son las excesivas llamadas a [RemoveBuildingForPlayer](../functions/RemoveBuildingForPlayer) durante [OnGameModeInit](OnGameModeInit), lo que podría causar un crash en el cliente. Este callback NO será llamado si el servidor crashea o el proceso es finalizado por otros medios, como usando el comando de Linux 'kill' o presionando el botón cerrar en la consola de Windows.

:::

## Funciones Relacionadas

- [GameModeExit](../functions/GameModeExit): Salir del gamemode actual.

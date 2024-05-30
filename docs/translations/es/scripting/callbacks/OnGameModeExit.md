---
título: OnGameModeExit
descripción: Este callback es llamado cuando un gamemode termina, ya sea mediante 'gmx', cuando el servidor se apaga, o cuando se usa GameModeExit.
tags: []
---

## Descripción

Este callback es llamado cuando un gamemode termina, ya sea mediante 'gmx', cuando el servidor se apaga, o cuando se usa GameModeExit.

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

Esta función también puede ser usada en un filterscript para detectar si el gamemode cambia, con comandos RCON como 'changemode' o 'gmx', ya que cambiando el gamemode no recarga un filterscript. Cuando usamos OnGameModeExit en conjunto con el comando de consola 'rcon gmx' tener en cuenta que hay una potencial posibilidad de que ocurran bugs en el cliente. Un ejemplo de esto son las excesivas llamadas a RemoveBuildingForPlayer durante OnGameModeInit, lo que podría causar un crash en el cliente. Este callback NO será llamado si el servidor crashea o el proceso es finalizado por otros medios, como usando el comando de Linux 'kill' o presionando el botón cerrar en la consola de Windows.

:::

## Callbacks Relacionados
Los siguientes callbacks pueden ser útiles, ya que están relacionados de alguna forma u otra con OnGameModeExit:

- [OnGameModeInit](../callbacks/OnGameModeInit): Este callback es llamado cuando un modo de juego (el server) inicia.
- [OnFilterScriptInit](../callbacks/OnFilterScriptInit): Este callback es llamado cuando un filterscript inicia.
- [OnFilterSciptExit](../callbacks/OnFilterScriptExit): Este callback es llamado cuando un filterscript finaliza.

- ## Funciones Relacionadas
La siguiente función puede ser útil, ya que está relacionada de alguna forma u otra con OnGameModeExit:

- [GameModeExit](../callbacks/GameModeExit): Finaliza el modo de juego actual.

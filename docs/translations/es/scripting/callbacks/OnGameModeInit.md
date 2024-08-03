---
título: OnGameModeInit
descripción: Este callback es desencadenado cuando el gamemode inicia.
tags: []
---

## Descripción

Este callback es desencadenado cuando el gamemode inicia.

## Ejemplos

```c
public OnGameModeInit()
{
    print("Gamemode iniciado!");
    return 1;
}
```

## Notas

:::tip

Esta función también puede ser usada en un filterscript para detectar si el gamemode cambia mediante comandos RCON como changemode o gmx, porque cambiando el gamemode no se recarga el filterscript.

:::

## Callbacks relacionados

Los siguientes callbacks pueden ser útiles, ya que están relacionados de alguna forma u otra con OnGameModeInit:

- [OnGameModeExit](OnGameModeExit): Este callback es llamado cuando un modo de juego finaliza.
- [OnFilterScriptInit](OnFilterScriptInit): Este callback es llamado cuando un filterscript es cargado.
- [OnFilterSciptExit](OnFilterScriptExit): Este callback es llamado cuando un filterscript finaliza.

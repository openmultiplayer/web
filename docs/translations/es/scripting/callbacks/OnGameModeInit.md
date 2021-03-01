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

## Funciones Relacionadas

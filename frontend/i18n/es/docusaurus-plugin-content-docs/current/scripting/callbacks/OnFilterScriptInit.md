---
título: OnFilterScriptInit
descripción: Este callback se llama cuando un filterscript es inicializado (cargado).
tags: []
---

## Descripción

Este callback se llama cuando un filterscript es inicializado (cargado). Solo se llama adentro del filterscript que está siendo iniciado.

## Ejemplos

```c
public OnFilterScriptInit()
{
    print("\n--------------------------------------");
    print("El filterscript fue cargado");
    print("--------------------------------------\n");
    return 1;
}
```

## Callbacks Relacionados
Los siguientes callbacks pueden ser útiles, ya que están relacionados de alguna forma u otra con OnFilterScriptInit:
- [OnFilterScriptExit](../callbacks/OnFilterScriptExit): Este callback es llamado cuando un filterscript finaliza.
- [OnGameModeInit](../callbacks/OnGameModeInit): Este callback es llamado cuando un modo de juego (el server) inicia.
- [OnGameModeExit](../callbacks/OnGameModeExit): Este callback es llamado cuando un modo de juego finaliza (por ejemplo, al apagar el servidor).

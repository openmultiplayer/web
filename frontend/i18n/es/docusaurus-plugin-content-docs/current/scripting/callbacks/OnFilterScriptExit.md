---
título: OnFilterScriptExit
descripción: Este callback se llama cuando termina la ejecución de un filterscript. Sólo se llama adentro del mismo filterscript.

tags: []
---

## Descripción

Este callback se llama cuando termina la ejecución de un filterscript. Sólo se llama adentro del mismo filterscript.

## Ejemplos

```c
public OnFilterScriptExit()
{
    print("\n--------------------------------------");
    print(" Mi filterscript dejó de ejecutarse");
    print("--------------------------------------\n");
    return 1;
}
```

## Callbacks Relacionados
Los siguientes callbacks pueden ser útiles, ya que están relacionados de alguna forma u otra con OnFilterScriptExit:
- [OnFilterScriptInit](OnFilterScriptInit): Este callback es llamado cuando un filterscript es cargado.
- [OnGameModeInit](OnGameModeInit): Este callback es llamado cuando un modo de juego (el server) inicia.
- [OnGameModeExit](OnGameModeExit): Este callback es llamado cuando un modo de juego finaliza (por ejemplo, al apagar el servidor).

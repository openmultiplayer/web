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

## Funciones Relacionadas

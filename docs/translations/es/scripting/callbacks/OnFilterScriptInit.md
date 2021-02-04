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

## Funciones Relacionadas

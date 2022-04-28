---
title: OnNPCModeInit.
description: Essa callback é executada quando um script de NPC é carregado.
tags: []
---

<VersionWarn name='callback' version='SA-MP 0.3a' />

## Descrição

Essa callback é executada quando um script de NPC é carregado.


## Exemplos

```c
public OnNPCModeInit()
{
    print("O script do NPC foi carregado.");
    return 1;
}
```

## Callbacks Relacionadas

- [OnNPCModeExit](../callbacks/OnNPCModeExit): Executada quando o script do NPC é descarregado.

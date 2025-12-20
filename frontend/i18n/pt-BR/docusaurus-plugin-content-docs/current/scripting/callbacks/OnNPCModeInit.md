---
title: OnNPCModeInit.
sidebar_label: OnNPCModeInit.
description: Essa callback é executada quando um script de NPC é carregado.
tags: []
---

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

- [OnNPCModeExit](OnNPCModeExit): Executada quando o script do NPC é descarregado.

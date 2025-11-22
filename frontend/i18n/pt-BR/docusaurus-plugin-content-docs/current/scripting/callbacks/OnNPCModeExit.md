---
title: OnNPCModeExit
sidebar_label: OnNPCModeExit
description: Essa callback é executada quando o script de um NPC é descarregado.
tags: []
---

## Descrição

Essa callback é executada quando o script de um NPC é descarregado. 


## Exemplos

```c
public OnNPCModeExit()
{
    print("O script do NPC foi descarregado!");
    return 1;
}
```

## Callbacks Relacionadas

- [OnNPCModeInit](OnNPCModeInit): Executada quando o script do NPC é carregado.

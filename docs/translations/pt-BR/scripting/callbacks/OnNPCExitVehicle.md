---
title: OnNPCExitVehicle
description: Essa callback é executada quando um NPC sai de um veículo.
tags: []
---

<VersionWarn name='callback' version='SA-MP 0.3a' />

## Descrição

Essa callback é executada quando um NPC sai de um veículo.


## Exemplos

```c
public OnNPCExitVehicle()
{
    print("O NPC saiu do veículo.");
    return 1;
}
```

## Callbacks Relacionadas

- [OnNPCEnterVehicle](OnNPCEnterVehicle): Executada quando um NPC entra em um veículo.

---
title: OnNPCEnterVehicle
description: Essa callback é executada quando o NPC entra em um veículo.
tags: []
---

<VersionWarn name='callback' version='SA-MP 0.3a' />

## Descrição

Essa callback é executada quando o NPC entra em um veículo.

| Nome         | Descrição                                               |
| ------------ | ------------------------------------------------------- |
| vehicleid    | ID do veículo que o NPC entrou.                         |
| seatid       | O assento que o NPC está usando.                        |

## Exemplos

```c
public OnNPCEnterVehicle(vehicleid, seatid)
{
    printf("Um NPC entrou no veículo de ID: %d, no Assento: %d", vehicleid, seatid);
    return 1;
}
```

## Callbacks Relacionadas

- [OnNPCExitVehicle](OnNPCExitVehicle): Executada quando um NPC sai de um veículo.

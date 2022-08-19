---
title: OnVehicleSpawn
description: Essa callback é chamada quando um veículo renasce.
tags: ["vehicle"]
---

:::warning

Essa callback **só é chamada** quando um veículo **re**nasce. CreateVehicle e AddStaticVehicleEx **não chamarão** essa callback.

:::

## Descrição

Essa callback é chamada quando um veículo renasce.

| Nome      | Descrição                             |
| --------- | ------------------------------------- |
| vehicleid | ID do veículo que acabou de renascer. |

## Retornos

0 - Vai prevenir que outros Filterscripts chamem essa callback.

1 - Indica que essa callback vai ser passada para outros Filterscripts em seguida.

Sempre é chamada primeiro em Filterscripts.

## Exemplos

```c
public OnVehicleSpawn(vehicleid)
{
    printf("Veículo ID %d renasceu!",vehicleid);
    return 1;
}
```

## Funções Relacionadas

- [SetVehicleToRespawn](../functions/SetVehicleToRespawn): Faz um veículo renascer.
- [CreateVehicle](../functions/CreateVehicle): Cria um veículo.
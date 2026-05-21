---
title: IsTrailerAttachedToVehicle
sidebar_label: IsTrailerAttachedToVehicle
description: "Verifica se um veículo possui um trailer acoplado."
tags: ["vehicle"]
---


## Descrição

Verifica se um veículo possui um trailer acoplado. Use GetVehicleTrailer para obter o veículo ID do trailer (se houver).

| Nome | Descrição |
| --------- | -------------------------------------------- |
| vehicleid | O ID do veículo para verificar se há reboques. |

## Retornos

**true** - O veículo possui um trailer acoplado.

**false** - O veículo não possui reboque acoplado.

## Exemplos

```c
if (IsTrailerAttachedToVehicle(vehicleid))
{
    printf("Vehicle %i has a trailer!", vehicleid);
}
```
## Funções Relacionadas

- [GetVehicleTrailer](GetVehicleTrailer): Verifique qual reboque um veículo está puxando.
- [AttachTrailerToVehicle](AttachTrailerToVehicle): Anexe um trailer a um veículo.
- [DetachTrailerFromVehicle](DetachTrailerFromVehicle): Solte um trailer de um veículo.

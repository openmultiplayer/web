---
title: VehicleCanHaveComponent
sidebar_label: VehicleCanHaveComponent
description: "O componente é legal em um modelo de veículo?"
tags: ["vehicle"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

O componente é legal no modelo do veículo?

| Nome | Descrição |
| ---------------------------------------- | ----------------------------- |
| [modelid](../resources/vehicleid) | Modelo do veículo ID |
| [component](../resources/carcomponentid) | ID do componente a ser verificado. |

## Retornos

**true** - O componente é legal no veículo.

**false** - O componente é ilegal no veículo.

## Exemplos

```c
new vehicleid = GetPlayerVehicleID(playerid);

if (VehicleCanHaveComponent(GetVehicleModel(vehicleid), 1010))
{
    SendClientMessage(playerid, 0x00FF00FF, "Nitro is legal on this vehicle.");
}
else
{
    SendClientMessage(playerid, 0xFF0000FF, "Nitro is illegal on this vehicle.");
}
```
## Funções Relacionadas

- [AddVehicleComponent](AddVehicleComponent): Adicione um componente a um veículo.
- [RemoveVehicleComponent](RemoveVehicleComponent): Remova um componente de um veículo.
- [GetVehicleComponentInSlot](GetVehicleComponentInSlot): Verifique quais componentes um veículo possui.
- [GetVehicleComponentType](GetVehicleComponentType): Verifique o tipo de componente através do ID.

## Recursos relacionados

- [Componente do carro IDs](../resources/carcomponentid)

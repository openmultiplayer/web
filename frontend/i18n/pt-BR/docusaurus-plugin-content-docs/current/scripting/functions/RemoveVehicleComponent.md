---
title: RemoveVehicleComponent
sidebar_label: RemoveVehicleComponent
description: "Remova um componente de um veículo."
tags: ["vehicle"]
---


## Descrição

Remova um componente de um veículo.

| Nome | Descrição |
| ---------------------------------------- | ------------------------------ |
| vehicleid | ID do veículo.             |
| [component](../resources/carcomponentid) | ID do componente a ser removido. |

## Retornos

**true** – O componente foi removido do veículo com sucesso.

**false** - O componente não foi removido porque o veículo não existe.

## Exemplos

```c
// Remova o Nitro do veículo do jogador
new vehicleid = GetPlayerVehicleID(playerid);
RemoveVehicleComponent(vehicleid, 1010);
```
## Funções Relacionadas

- [AddVehicleComponent](AddVehicleComponent): Adicione um componente a um veículo.
- [GetVehicleComponentInSlot](GetVehicleComponentInSlot): Verifique quais componentes um veículo possui.
- [GetVehicleComponentType](GetVehicleComponentType): Verifique o tipo de componente através do ID.
- [VehicleCanHaveComponent](VehicleCanHaveComponent): O componente é legal no veículo?

## Callbacks Relacionadas

- [OnVehicleMod](../callbacks/OnVehicleMod): Chamado quando um veículo é modificado.
- [OnEnterExitModShop](../callbacks/OnEnterExitModShop): Chamado quando um veículo entra ou sai de uma loja de mods.

## Recursos relacionados

- [Componente do carro IDs](../resources/carcomponentid)

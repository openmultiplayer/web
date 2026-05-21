---
title: UpdateVehicleDamageStatus
sidebar_label: UpdateVehicleDamageStatus
description: "Define os vários status de danos visuais de um veículo, como pneus estourados, luzes quebradas e painéis danificados."
tags: ["vehicle"]
---


:::tip

Para algumas funções úteis para trabalhar com valores de danos a veículos, consulte [aqui](../resources/damagestatus).

:::

## Descrição

Define os vários status de danos visuais de um veículo, como pneus estourados, luzes quebradas e painéis danificados.

| Nome | Descrição |
| --------------------------- | ---------------------------------------------------------------------------------------------- |
| vehicleid | O ID do veículo para definir os danos.                                                    |
| VEHICLE_PANEL_STATUS:panels | Um conjunto de bits contendo o status de dano do painel. Consulte [Estados do Painel](../resources/panelstates) |
| VEHICLE_DOOR_STATUS:doors | Um conjunto de bits contendo o status de dano da porta. Consulte [Estados da porta](../resources/doorstates) |
| VEHICLE_LIGHT_STATUS:lights | Um conjunto de bits contendo o status de dano leve. Consulte [Estados luminosos](../resources/lightstates) |
| VEHICLE_TIRE_STATUS:tires | Um conjunto de bits contendo o status de danos ao pneu. Consulte [Estados dos pneus](../resources/tirestates) |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
new
	VEHICLE_PANEL_STATUS:panels,
	VEHICLE_DOOR_STATUS:doors,
	VEHICLE_LIGHT_STATUS:lights,
	VEHICLE_TIRE_STATUS:tires;

GetVehicleDamageStatus(vehicleid, panels, doors, lights, tires);

tires = VEHICLE_TIRE_STATUS:15; // Definir pneus para 15 irá estourar todos eles

// Ou faça assim:
tires = (VEHICLE_TIRE_STATUS_FRONT_LEFT_POPPED | VEHICLE_TIRE_STATUS_FRONT_RIGHT_POPPED | VEHICLE_TIRE_STATUS_REAR_LEFT_POPPED | VEHICLE_TIRE_STATUS_REAR_RIGHT_POPPED);

UpdateVehicleDamageStatus(vehicleid, panels, doors, lights, tires);
```
## Funções Relacionadas

- [SetVehicleHealth](SetVehicleHealth): Define a integridade de um veículo.
- [GetVehicleHealth](GetVehicleHealth): Verifique a integridade de um veículo.
- [RepairVehicle](RepairVehicle): Repare totalmente um veículo.
- [GetVehicleDamageStatus](GetVehicleDamageStatus): Obtenha o estado de dano do veículo para cada peça individualmente.

## Callbacks Relacionadas

- [OnVehicleDamageStatusUpdate](../callbacks/OnVehicleDamageStatusUpdate): Chamado quando o estado de dano de um veículo muda.

## Recursos relacionados

- [Status do dano](../resources/damagestatus)
- [Status do painel do veículo](../resources/vehicle-panel-status)
- [Estados do Painel](../resources/panelstates)
- [Status da porta do veículo](../resources/vehicle-door-status)
- [Estados da porta](../resources/doorstates)
- [Status da luz do veículo](../resources/vehicle-light-status)
- [Estados luminosos](../resources/lightstates)
- [Status do pneu do veículo](../resources/vehicle-tire-status)
- [Estados dos pneus](../resources/tirestates)

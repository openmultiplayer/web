---
title: GetVehicleDamageStatus
sidebar_label: GetVehicleDamageStatus
description: "Recuperar os status de danos de um veículo."
tags: ["vehicle"]
---


:::tip

Para algumas funções úteis para trabalhar com valores de danos a veículos, consulte [aqui](../resources/damagestatus).

:::

## Descrição

Recuperar os status de danos de um veículo.

| Nome | Descrição |
| --------------------------- | ---------------------------------------------------------------------------------------------- |
| vehicleid | O ID do veículo do qual obter o status dos danos.                                           |
| VEHICLE_PANEL_STATUS:panels | Um conjunto de bits contendo o status de dano do painel. Consulte [Estados do Painel](../resources/panelstates) |
| VEHICLE_DOOR_STATUS:doors | Um conjunto de bits contendo o status de dano da porta. Consulte [Estados da porta](../resources/doorstates) |
| VEHICLE_LIGHT_STATUS:lights | Um conjunto de bits contendo o status de dano leve. Consulte [Estados luminosos](../resources/lightstates) |
| VEHICLE_TIRE_STATUS:tires | Um conjunto de bits contendo o status de danos ao pneu. Consulte [Estados dos pneus](../resources/tirestates) |

## Retornos

**1** - A função foi executada com sucesso.

**0** - A função não foi executada. Isso significa que o veículo especificado não existe.

## Exemplos

```c
new
	VEHICLE_PANEL_STATUS:panels,
	VEHICLE_DOOR_STATUS:doors,
	VEHICLE_LIGHT_STATUS:lights,
	VEHICLE_TYRE_STATUS:tyres;

GetVehicleDamageStatus(vehicleid, panels, doors, lights, tyres);
printf("Vehicle Status: [Panels]: %d - [Doors]: %d - [Lights]: %d - [Tyres]: %d", panels, doors, lights, tyres);
```
## Funções Relacionadas

- [UpdateVehicleDamageStatus](UpdateVehicleDamageStatus): Atualize os danos ao veículo.
- [SetVehicleHealth](SetVehicleHealth): Define a integridade de um veículo.
- [GetVehicleHealth](GetVehicleHealth): Verifique a integridade de um veículo.
- [RepairVehicle](RepairVehicle): Repare totalmente um veículo.

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

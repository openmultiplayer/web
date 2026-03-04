---
title: Tipos de Informação de Veículo
sidebar_label: Tipos de Informação de Veículo
description: Constantes de tipos de informação de veículo.
---

:::info

Uma lista dos tipos de informação de veículo usados por [GetVehicleModelInfo](../functions/GetVehicleModelInfo) pode ser encontrada aqui.

:::

| Vehicle Information Type            | Description                                                                                                                          |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `VEHICLE_MODEL_INFO_SIZE`           | O tamanho do veículo                                                                                                                 |
| `VEHICLE_MODEL_INFO_FRONTSEAT`      | Posição do banco dianteiro \*                                                                                                       |
| `VEHICLE_MODEL_INFO_REARSEAT`       | Posição do banco traseiro \*                                                                                                        |
| `VEHICLE_MODEL_INFO_PETROLCAP`      | Posição da tampa do combustível \*                                                                                                  |
| `VEHICLE_MODEL_INFO_WHEELSFRONT`    | Posição das rodas dianteiras \*                                                                                                     |
| `VEHICLE_MODEL_INFO_WHEELSREAR`     | Posição das rodas traseiras \*                                                                                                      |
| `VEHICLE_MODEL_INFO_WHEELSMID`      | Posição das rodas do meio (aplica-se a veículos com mais de 4 rodas) \*                                                           |
| `VEHICLE_MODEL_INFO_FRONT_BUMPER_Z` | Altura do para-choque dianteiro. [GetVehicleModelInfo](../functions/GetVehicleModelInfo) retornará apenas o valor Z quando usado |
| `VEHICLE_MODEL_INFO_REAR_BUMPER_Z`  | Altura do para-choque traseiro. [GetVehicleModelInfo](../functions/GetVehicleModelInfo) retornará apenas o valor Z quando usado  |

\* Esses valores são calculados a partir do pivot (geralmente o centro) do veículo.

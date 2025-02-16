---
title: AddStaticVehicle
description: Añade un vehículo 'estático' (los modelos están pre-cargados para los jugadores) al modo de juego.
tags: ["vehículo, vehicle"]
---

## Descripción

Añade un vehículo 'estático' (los modelos están pre-cargados para los jugadores) al modo de juego.

| Nombre                                   | Descripción                            |
| ---------------------------------------- | -------------------------------------- |
| modelid                                  | El ID del modelo para el vehículo.     |
| Float:spawn_X                            | La coordenada X para el vehículo.      |
| Float:spawn_Y                            | La coordenada Y para el vehículo.      |
| Float:spawn_Z                            | La coordenada Z para el vehículo.      |
| Float:z_angle                            | Dirección del vehículo - ángulo.       |
| [color1](../resources/vehiclecolorid) | El ID del color primario. -1 para aleatorio.   |
| [color2](../resources/vehiclecolorid) | El ID del color secundario. -1 para aleatorio. |

## Devoluciones

El ID del vehículo creado (entre 1 y MAX_VEHICLES).

INVALID_VEHICLE_ID (65535) si el vehículo no fue creado (se alcanzó el límite de vehículos o se pasó un ID de modelo de vehículo no válido).

## Ejemplos

```c
public OnGameModeInit() {
    // Añadir un Hydra al juego
    AddStaticVehicle(520, 2109.1763, 1503.0453, 32.2887, 82.2873, 0, 1);
    return 1;
}
```

## Funciones Relacionadas

- [AddStaticVehicleEx](AddStaticVehicleEx): Añadir un vehículo estático con tiempo de reaparición personalizado.
- [CreateVehicle](CreateVehicle): Crear un vehículo.
- [DestroyVehicle](DestroyVehicle): Destruir un vehículo.
